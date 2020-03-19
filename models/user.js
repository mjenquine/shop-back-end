const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

userSchema.pre('save', function(next){
    let user = this
    if(this.isModified('password') || this.isNew){
        bcrypt.genSalt(10, function(err, salt){
            if(err){
                return next(error)
            }
            bcrypt.hash(user.password, salt, function(){

            },
            function(err, hash){
                if(err){
                    return next(err)
                }
                user.password = hash
                next()
            }
        )
        })
    }

    userSchema.comparePassword = function(password, cb){
        bcrypt.compare(password, this.password, function(err, isMatch){
            if(err){
                return cb(err)
            }
            cb(null, isMatch)
        })
    }
})

module.exports = mongoose.model('User', userSchema)
