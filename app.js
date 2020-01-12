const express = require('express');

const mongoose = require('mongoose');

const path = require('path');

const app = express();

const MONGO_URI = 'mongodb://localhost:27017/Subscription-Reviewer';

const publicRoutes = require('./routes/public');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(publicRoutes);

app.use( (err, req, res, next) => {
    return res.render('public/500', {
        pageTitle: '500',
        path: '500'
    });
});

app.use( (req, res, next) => {
    return res.render('public/404', {
        pageTitle: '404',
        path: '404'
    });
});

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected.');
        app.listen(3000);
    }
});