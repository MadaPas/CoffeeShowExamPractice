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
const register = fs.readFileSync('./public/auth/register/register.html', 'utf8');

router.get('/login', (req, res) => {
    return res.send(header + navbar + login + footer);
});

router.get('/register', (req, res) => {
    return res.send(header + navbar + register + footer);
});

router.post('/register', (req, res) => {
    const {
        username,
        password
    } = req.body;
    if (username && password) {
        // password validation
        if (password.length < 8) {
            return res.status(400).send({
                response: "The password must be 8 characters or longer!"
            });
        } else {
            try {
                User.query().select('username').where('username', username).then(foundUser => {
                    if (foundUser.length > 0) {
                        return res.status(400).send({
                            response: "This user already exists!"
                        });
                    } else {
                        bcrypt.hash(password, saltRounds).then(hashedPassword => {
                            User.query().insert({
                                username,
                                password: hashedPassword
                            }).then(createdUser => {
                                return res.redirect('/login');
                            });
                        });
                    }
                });
            } catch (error) {
                return res.status(500).send({
                    response: "Something went wrong with the DB!"
                });
            }
        }
    } else {
        return res.status(400).send({
            response: "The username or password are missing!"
        });
    }
});

router.post('/login', (req, res) => {
    // Get the data from the request
    const {
        username,
        password
    } = req.body;
    // Validate the data 
    if (username && password) {
        // Check if user exists and get their password
        try {
            User.query().where('username', username).select('username', 'password').then(foundUser => {
                if (foundUser.length < 1) {
                    return res.status(400).send({
                        response: "This user was not found."
                    });
                } else {
                    bcrypt.compare(password, foundUser[0].password).then((result) => {
                        if (result) {
                            // Send a response based on the comparison handle session
                            req.session.loggedin = true;
                            req.session.username = username;
                            return res.redirect('/');
                        } else {
                            return res.status(400).send({
                                response: "The password does not match!"
                            });
                        }
                    });
                }
            });
        } catch (error) {
            return res.status(500).send({
                response: "Something went wrong with the DB!"
            });
        }
    } else {
        return res.status(400).send({
            response: "Username or password are missing!"
        });
    }
});

module.exports = router;