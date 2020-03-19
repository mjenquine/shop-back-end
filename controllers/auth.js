const config = {
    secret: 'dreamTeamDrinksWine'
}
const User = require('../models/user.js')
const auth = require('express').Router()
const jwt = require('jwt-simple')


const getToken = function(headers){
    if(headers && headers.token){
        let parted = headers.token.split(' ');
        if(parted.length === 2){
            return parted[1]
        }else{
            return null
        }
    }else{
        return null
    }
}

const authenticateUser = function(req, res, next){
    let token = getToken(req.headers)
    req.session = {}
    req.session.user = {}

    if(token == null){
        return next(error 'invalid token')
    }
    let decoded = jwt.decode(token, config.secret)

    User.findOne({email.decoded.email}, function(err, data){
        if(err || !data){
            return next(res.json({error: 'Auth Failed'}))
        }
        req.session.user = data
        next()
    })
}

module.exports = {
    getToken,
    authenticateUser
}
