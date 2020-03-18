const auth = require('./auth.js')
const {authenticateUser, getToken} = auth
const User = require('../models/user.js')
const users = require('express').Router()

users.post('/login', (req, res) => {
    User.findOne({email: req.body.user.email}, (err, user) => {
        if(err){
            return res.json({error: err})
        }
        if(!user){
            return res.json({error: 'The User isn't found})
        }else{
            user.comparePassword(req.body.user.password, fucntion error, isMatch){
                let token = jwt.encode(user, config.secret)
                return res.json{success: true, token: 'JWT', token, user: user}
            }
        }

    })
})
