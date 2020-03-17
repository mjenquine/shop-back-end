const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

module.exports = mongoose.model('Item', itemSchema)
