const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const FavoriteRestaurantModel = require('../Models/FavoriteRestaurantModel');

router.get('/', (req, res) => {
    FavoriteRestaurantModel.find().then(docs => res.json(docs));
})

// To add a favorite collection
router.post('/', (req, res) => {
    let favoriteRestaurantModel = new FavoriteRestaurantModel({
        ...req.body,
        _id: req.body.id
    });
    favoriteRestaurantModel.save().then(item => res.end()).catch(err => console.log(err));
})

// To delete a favorite collection
router.delete('/', (req, res) => {
    console.log(req.query.id);
    FavoriteRestaurantModel.deleteOne({ _id: req.query.id }, () => {
        res.end();
    });
})

module.exports = router;