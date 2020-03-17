const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: String,
    price: String,
    description: String,
    img: String
})

module.exports = mongoose.model('Item', itemSchema)
