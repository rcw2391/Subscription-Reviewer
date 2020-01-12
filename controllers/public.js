const Category = require('../models/category');

const Subscription = require('../models/subscription');

exports.getIndex = (req, res, next) => {
    return res.render('public/index', {
        pageTitle: 'Home',
        path: 'home'
    });
};

exports.getSubscriptions = (req, res, next) => {
    Category.find({}, null, { sort: { name: 1 } })
        .populate('subscriptions')
        .exec( (err, categories) => {
            if(err) {
                console.log(err);
                throw new Error('Error retrieving categories.');
            } else {
                return res.render('public/subscriptions', {
                    pageTitle: 'Subscriptions',
                    path: 'subscriptions',
                    categories: categories
                });
            }
        });
};