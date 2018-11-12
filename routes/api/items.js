const express = require('express');
const router = express.Router();

//Item Model (vlaga u modelot na itemite)
const Item = require('../../models/items');

// @route  GET request api/items
// @desc   GET All ITEMS
// @access Public 

router.get('/', (request, response) => {
    Item.find()
    .sort({ date:-1 })
    .then(items => response.json(items))
});

// @route  POST request api/items
// @desc   Create A ITEM
// @access Public 

router.post('/', (request, response) => {
    const newItem = new Item({
        name: request.body.name
    });

    newItem.save().then(item => response.json(item));
});

// @route  DELETE request api/items
// @desc   DELETE A ITEM
// @access Public 

router.delete('/:id', (request, response) => {
    Item.findById(request.params.id)
    .then(item => item.remove()
    .then(() => response.json({success:true})))
    .catch(error => response.status(404).json({success:false}))
});

module.exports = router;