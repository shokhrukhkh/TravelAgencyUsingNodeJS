const Travels = require('../models/Travels');
exports.homeInformation = async (req, res) => {
    const travels = await Travels.findAll({limit: 3})
    res.render('index', {
        pageTitle: 'Home',
        className: 'home',
        travels
    })
}