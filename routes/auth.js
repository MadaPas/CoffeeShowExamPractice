const router = require('express').Router();

const User = require("../models/User.js");

const bcrypt = require('bcrypt');
const saltRounds = 12;

const fs = require('fs');

/*
    rendering views
*/
const header = fs.readFileSync('./public/fragments/header.html', 'utf8')
const navbar = fs.readFileSync('./public/fragments/navbar.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');

const login = fs.readFileSync('./public/auth/login/login.html', 'utf8');

router.get('/login', (req, res) => {
    return res.send(header + navbar + login + footer);
});


router.post('/login', (req, res) => {
    // Get the data from the request
    const { username, password } = req.body;
    // Validate the data 
    if (username && password) {
        // Check if user exists and get their password
        try {
            User.query().where('username', username).select('username', 'password').then(foundUser => {
                if (foundUser.length < 1) {
                    return res.status(400).send({ response: "This user was not found." });
                } else {
                    bcrypt.compare(password, foundUser[0].password).then((result) => {
                        if (result) {
                            // Send a response based on the comparison handle session
                            req.session.loggedin = true;
                            req.session.username = username;
                            return res.redirect('/');
                        } else {
                            return res.status(400).send(
                                { response: "The password does not match!" });
                        }
                    });
                }
            });
        } catch (error) {
            return res.status(500).send({ response: "Something went wrong with the DB!" });
        }
    } else {
        return res.status(400).send({ response: "Username or password are missing!" });
    }
});

module.exports = router;