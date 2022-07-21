const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {user} = require('//models');
const saltRounds = bcrypt.genSaltSync(10)


router.get("/", async (req, res, next) => {
    const users = await user.findAll()
    console.log("users from get",users)
    res.json(users)
})
router.post("/register", async (req, res, next) => {
    const {firstName, lastName, email, username, password} = req.body
    const hash = bcrypt.hashSync(password, saltRounds)
    const user = await user.create({

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
        username: user.username
    })
})

router.post("/login", async (req, res, next) => {
    const {email, password} = req.body
    const user = await user.findOne({
        where: {
            email
        }
    })
    if(user){
        const comparePass = bcrypt.compareSync(password, user.password)
        if(comparePass === true){
            console.log("loggedIn User", user)
            res.json({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username 
            })
        } else {
            res.send("oops!, Incorrect Password")
        }
    } else{
        res.send("oops!, User Not Found")
    } 
})

module.exports = router