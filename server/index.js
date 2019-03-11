const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

//import the database connection
const db = require('./config/database')

// test the connect
/* db.authenticate()
    .then( () => console.log('Database connected') )
    .catch(error => console.log(error)) */
//Import the config
const configs = require('./config');

// Create the new server
const app  = express();

//Filter the current environment
const config = configs[app.get('env')];

// Enable Pug
app.set('view engine', 'pug')

// Add the views folder into the project
app.set('views', path.join(__dirname, './views') );

// load the public assets folder
app.use(express.static('public'));


// get the current year
app.use((req,res,next) => {
    const date = new Date();
     res.locals.currentYear = date.getFullYear();
     res.locals.currentPage = req.path;
     
     return next();      
});

// pass the sitename to the views
app.locals.sitetitle = configs.sitename;

// enable the body parser
app.use(bodyParser.urlencoded({extended: true}));

// Listen for the home page
app.use('/', routes());

// run the app
app.listen(3000);