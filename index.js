const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connecting to MongoDB using mongoose
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}).then(() => {
  console.log('Connected to Mongo');
}).catch(err => {
  console.log(err);
});

let TestModel = mongoose.model('test', new mongoose.Schema({
  name: String,
  email: String
},{
  strict: false
}),'created');

TestModel.find().exec().then(docs => {
  console.log(docs);
})

let testModel = new TestModel({
  'name' : '3',
  'height' : '5/6'
});

testModel.save().then(item => console.log('saved to database')).catch(err => console.log(err));
// Listening to port number 5000
app.listen(5000, () => {
  console.log('Listening to port 5000');
})
