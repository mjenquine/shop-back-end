//dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 3003

//middleware

app.use(express.json())

const whitelist = ['http://localhost:3000', 'https://enigmatic-mountain-68507.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback){
        if(whitelist){
            callback(null, true)
        }else{
            callback(newError('Not Allowed In CORS'))
        }
    }
}
app.use(cors(corsOptions))

mongoose.connection.on('error', err =>
console.log(err.message + 'is Mongo not running?'))
mongoose.connection.on('disconnected', () => {
        console.log('mongo disconnected');
})
mongoose.connect('mongodb://localhost:27017/shop', { useUnifiedTopology: true, useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('Mongoose is currently 🎊🎊 POPPING');
})

//controllers and routes
app.get('/', (req, res) => {
    res.send('Welcome to SHOP')
})

const shopController = require('./controllers/shop.js')
app.use('/shop', shopController)

//listener
app.listen(PORT, () => {
    console.log('A-okay 👌 on port: ', PORT);
})
