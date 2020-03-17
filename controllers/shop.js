const shop = require('express').Router()
const Item = require('../models/item.js')

//index
shop.get('/', (req, res) => {
    // res.send('Welcome to SHOP Index')
    Item.find({}, (err, foundItems) => {
        if(err){
            res.status(400).json({error: err.message})
        }
        res.status(200).send(foundItems)
    })
})

//create
shop.post('/', async (req, res) => {
    Item.create(req.body, (err, createdItem) => {
        if(err){
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdItem)
    })
})

//update
shop.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
        if(err){
            res.status(400).json({error: err.message})
        }
        res.status(200).json(updatedItem)
    })
})

//delete
shop.delete('/:id', (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, deletedItem) => {
        if(err){
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedItem)
    })
})

//export
module.exports = shop
