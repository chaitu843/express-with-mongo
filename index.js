const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const FavoriteCollectionRoutes = require('./Routes/FavoriteCollectionRoutes');
const FavoriteRestaurantRoutes = require('./Routes/FavoriteRestaurantRoutes');

// Connecting to MongoDB using mongoose
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,}).then(() => {
  console.log('Connected to Mongo');
}).catch(err => {
  console.log(err);
});

// To get all favorite collections
app.use('/favoriteCollection', FavoriteCollectionRoutes);
app.use('/favoriteRestaurant', FavoriteRestaurantRoutes);

app.listen(5000, () => {
  console.log('Listening to port 5000');
})
