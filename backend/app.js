const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

// My Variables
const app = express();
const port = process.env.PORT || 3000;

// Set index file
const index = fs.readFileSync(__dirname + '/../dist/index.html', 'utf8')

// Settings
app.use('/', express.static(__dirname + '/../dist'));
mongoose.connect("mongodb://admin:testadmin@ds227045.mlab.com:27045/szumilas-cms")

// Set up controllers
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
const contactFormController = require('./controllers/contactFormController');
setupController(app);
apiController(app);
contactFormController(app);

// Return Index

app.get('*', (req, res) => {
    res.send(index) 
})

app.listen(port);