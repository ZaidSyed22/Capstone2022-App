const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { sequelize, deals, user} = require('./models');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const winston = require('winston');
const moment = require('moment');
const pg = require('pg-promise')();
const debug = require("debug")("server");
const router = express.Router();
const {User} = require('./models')

const saltRounds = bcrypt.genSaltSync(10)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express())
app.use(methodOverride('_method'))



const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'capstone22' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ]
})


app.all('*', (req, res, next) => {
    logger.info({
        "Action": req.method,
        "Path": req.path,
        "Content_Type": req.header('Content-Type'),
        "Body": req.body,
        "Time": moment().format('MM/DD/YYYY, h:mm:ss a')
    })
    next()
})


async function main(){
    await sequelize.sync({force: false})
}
main()


//saving deal in the database.
app.post('/saveDeal', async function (req, res) {
    let newDeal = await deals.create(
        {
            username: req.body.username,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            purchasePrice: req.body.purchasePrice,
            rentPsf: req.body.rentPsf,
            period: req.body.period,
            squareFeet: req.body.squareFeet,
            units: req.body.units,
            rentGrowth: req.body.rentGrowth,
            propertyType: req.body.propertyType,
            propertyClass: req.body.propertyClass,
            capex: req.body.capex,
            vacancyRate: req.body.vacancyRate,
            capRate: req.body.capRate,
            costOfCapital: req.body.costOfCapital,
            salePrice: req.body.salePrice,
            propertyIncome: req.body.propertyIncome,
            propertyCashFlows: req.body.propertyCashFlows,
            propertyNpv: req.body.propertyNpv,
            years: req.body.years,
            coordinates: req.body.coordinates
         }
    ) 


    if (newDeal.city == null) {
        res.statusCode = 400;
        res.send('Unsuccessful');
    } else {
        res.send(newDeal)
    }
});

//to get all deals for to display all saved deals
app.get('/deals', async (req, res) => {

    let savedDeals = await deals.findAll({
    })

    if (savedDeals[0].city == null) {
        res.statusCode = 400;
        res.send('Unsuccessful');
    } else {
        res.send(savedDeals)
    }
  
});

//Account page to logged in user's saved deals
app.get('/yourDeals', async (req, res) => {

    let account = await deals.findAll({
        where: {
            username: req.query.username
        }
    })

    if (account[0].city == null) {
        res.statusCode = 400;
        res.send('Unsuccessful');
    } else {
        res.send(account)
    }
});

app.delete('/delDeal/:id', async (req, res) => {
    let deleteDeal =  await deals.findOne ({
        where: {
            id: req.params.id
        }
    })

    if (deleteDeal == null) {
        res.send (`${req.params.id} is not a valid id`)
    } else {
    await deals.destroy({
        where: {
            id: req.params.id
        }
    })

    }
})

//delete user & the saved deals from the user
app.delete('/user/:id', async (req, res) => {
    let deleteUser =  await user.findOne ({
        where: {
            id: req.params.id
        }
    })

    if (deleteUser == null) {
        res.send (`${req.params.id} is not a valid id`)
    } else {
    await user.destroy({
        where: {
            id: req.params.id
        }
    })
   await deals.destroy({
        where: {
            username: req.params.username
        }
    })

    }
})

//Changing deal info
app.put('/editDeal/:id', async (req, res) => {
    let postID = req.params.id

    let id = await deals.update(
        {
            units: req.body.units,
            propertyType: req.body.propertyType,
        }, {
            where:{
                id: postID
            }
        })    
        
        if (id.city == null) {
            res.statusCode = 400;
            res.send('Unsuccessful');
        } else {
            res.send(id)
        }
    
    
});


//-----------CALLS FOR ADMINS-------------------------------------

// view all users
app.get('/users', async (req, res) => {
    let userInfo = await User.findAll();

   res.send(userInfo);
})

//view all deals
app.get('/allDeals', async (req, res) => {
    let allDeals = await deals.findAll();

   res.send(allDeals);
})


//-----------LOGIN-------------------------------------


app.post("/register", async (req, res) => {
    let {firstName, lastName, email, username, password} = req.body
    let hash = bcrypt.hashSync(password, saltRounds)
    let user = await User.create({

        firstName, 
        lastName,
        email,
        username,
        password:hash,
    })
    console.log("User Created",user)
    res.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password
    })
})

app.post("/login", async (req, res) => {
    let {email, password} = req.body
    let user = await User.findOne({
        where: {
            email
        }
    })
    if(User){
        let comparePass = bcrypt.compareSync(password, user.password)
        if(comparePass === true){
            console.log("loggedIn User", User)
            res.json({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                password: user.password
            })
        } else {
            res.send("oops!, incorrect password")
        }
    } else{
        res.send("oops!, user not found")
    } 
})



app.listen(2022, async ()=> debug('now running on port ${port}'))