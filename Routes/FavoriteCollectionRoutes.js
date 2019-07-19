const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const FavoriteCollectionModel = require('../Models/FavoriteCollectionModel');

router.get('/', (req, res) => {
    FavoriteCollectionModel.find().then(docs => res.json(docs));
})

// To add a favorite collection
router.post('/', (req, res) => {
    let favoriteCollectionModel = new FavoriteCollectionModel({
        ...req.body,
        _id: req.body.id
    });
    favoriteCollectionModel.save().then(item => res.end()).catch(err => console.log(err));
})

// To delete a favorite collection
router.delete('/', (req, res) => {
    console.log(req.query.id);
    FavoriteCollectionModel.deleteOne({ _id: req.query.id }, () => {
        res.end();
    });
})

module.exports = router;