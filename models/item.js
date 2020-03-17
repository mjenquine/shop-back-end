const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: {type: String},
    price: {type: String},
    description: {type: String},
    img: {type: String}
})

module.exports = mongoose.model('Item', itemSchema)
