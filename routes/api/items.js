const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items...this is the path where the following router.get('/') goes to with the const Item
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create a Post
// @access Public
// Following constructs an object to insert into the DB
router.get('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    // Now save this variable to the DB
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete A Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;