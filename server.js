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
app.put('/savedDeals/:id', async (req, res) => {
    let userid = req.params.id

    await deals.update(
        {
        username: req.body.username,
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        mileage: req.body.mileage,
        range_mi:req.body.range_mi,
        range_km:req.body.range_km,
        kWh_100mi:req.body.kWh_100mi,
        kWh_100km:req.body.kWh_100km
        }, {
            where:{
                id: userid
            }
        })
    
    
});


//-----------CALLS FOR ADMINS-------------------------------------

//view all users
app.get('/users', async (req, res) => {
    let userInfos = await user.findAll();

   res.send(userInfos);
})

//view all deals
app.get('/allDeals', async (req, res) => {
    let allDeals = await deals.findAll();

   res.send(allDeals);
})


//-----------LOGIN-------------------------------------

// login authentication
// app.post('/login', async function (req, res) {
//     // first check if all fields are entered
//     if (req.body.email == "" || req.body.password == "") {
//         res.status(400).send('error: please fill in all fields')
//     } else {
//         // if so, look up the user by email
//         let user = await user.findOne({
//             where: {
//                 email: req.body.email
//             }
//         })
//         // check if user exists
//         if(user == null) {
//             res.status(404).send('error: email not found')
//         } else {
//             // if user exists, validate password
//             let isValid = await bcrypt.compare(req.body.password, user.password)
//             if(isValid) {
//                 // if password successful, redirect to garage
//                 let userGarage = await user.findAll({
//                     where: {
//                         id: user.id
//                     }
//                 })
            
//                 let car = await list_of_evs.findAll({
//                     where: {
//                         year: userGarage[0].year,
//                         model: userGarage[0].model,
//                     }
//                 })
            
//                 let comparables = await user_car_info.findAll({
//                     where: {
//                         model: userGarage[0].model
//                     }
//                 })
            
//                  // list all the properties you care about
//                 properties = ['year', 'mileage', 'range_mi', 'range_km', 'kWh_100mi', 'kWh_100km']
             
//                 // create a parsing function
//                 let parser = (array, stat) => {
//                     return array.map(x => x[stat])
//                 }
//                 // create an averaging function
//                 let average = (array) => {
//                     let avg = array.reduce((a, b) => a + b)/array.length
//                     return math.round(avg)
//                 }
            
//                 // calculate a bunch of averages and store the results
//                 let averages = {}
            
//                 for(i=0; i < properties.length; i++) {
//                     // parse the metric you care about
//                     let parsedArray = parser(comparables, properties[i])
//                     // calc the average
//                     let avg = average(parsedArray)
//                     // store the avg to an obj
//                     averages[properties[i]] = avg
//                 }
             
//                 averages.sampleSize = comparables.length
            
//                 res.render('garage', {
//                     locals: {
//                         userGarage,
//                         car,
//                         averages
//                     }
//                 })
//             } else {
//                 res.status(401).send('invalid password')
//             }
//         }
//     }
// });

app.listen(2022, async ()=> debug('now running on port ${port}'))