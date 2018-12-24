const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect('mongodb://movie_user:abcd1234@ds243344.mlab.com:43344/movie-api');
    mongoose.connection.on('open', () => {

        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {

        console.log('MongoDB: Error: ', err);
    });


};