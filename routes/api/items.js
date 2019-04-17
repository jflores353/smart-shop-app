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

module.exports = router;