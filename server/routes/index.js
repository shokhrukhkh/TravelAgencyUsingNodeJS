const express = require('express');
const router = express.Router();

// import modules
const Travels = require('../models/Travels');
const Testimonials = require('../models/Testimonials');

// Import the controllers
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialsController = require('../controllers/testimonialsController');
const homeController = require('../controllers/homeController');

module.exports = function() {
    router.get('/', homeController.homeInformation);
    router.get('/about', aboutController.aboutInformation);
    router.get('/travels', travelController.displayTravels);
    router.get('/travels/:id', travelController.displayTravel);
    router.get('/testimonials', testimonialsController.displayTestimonials);
    router.post('/testimonials', testimonialsController.addTestimonials);
    return router;
}