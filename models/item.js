const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: {type: String},
    price: {type: String},
    description: {type: String},
    quantity: {type: Number, default: 0},
    img: {type: String}
})

module.exports = mongoose.model('Item', itemSchema)