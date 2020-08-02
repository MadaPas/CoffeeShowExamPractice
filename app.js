const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

/* 
    Enable express to parse json
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const session = require('express-session');
// you need to copy the config.template.json file and fill out your secret
const config = require('./config/config.json');

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
}));

/* 
    Setup Objection + Knex 
*/

const { Model } = require('objection');
const Knex = require('knex');
// knexFile contains our meta information about our connection
const knexFile = require('./knexfile.js');

// Initialize knex  // knex contains the connection
const knex = Knex(knexFile.development); // This is how you can have different environments, eg. Development, Production


// Give the knex instance to objection
// Connect the knex to our objection model, so that objection knows to use knex
Model.knex(knex);

const saltRounds = 12;
bcrypt.hash("password", saltRounds, function(err, hash) {
    console.log("user:", hash);
});
bcrypt.hash("password1", saltRounds, function(err, hash) {
    console.log("user1:", hash);
});
bcrypt.hash("password2", saltRounds, function(err, hash) {
    console.log("user2:", hash);
});
/* 
    Start server 
*/

const PORT = 5000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});