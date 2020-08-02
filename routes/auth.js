const router = require('express').Router();

const User = require("../models/User.js");

const bcrypt = require('bcrypt');
const saltRounds = 12;

const fs = require('fs');

/*
    rendering views
*/

const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const navbarIndex = fs.readFileSync('./public/fragments/navbarIndex.html', 'utf8');
const navbarUser = fs.readFileSync('./public/fragments/navbarUser.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');

const login = fs.readFileSync('./public/auth/login/login.html', 'utf8');
const register = fs.readFileSync('./public/auth/register/register.html', 'utf8');


router.get('/login', (req, res) => {
    if (req.session.signedIn) {
        return res.redirect('/user');
    }
    return res.send(header + navbarIndex + login + footer);
});

router.get('/register', (req, res) => {
    return res.send(header + navbarIndex + register + footer);
});
router.post("/register", (req, res) => {
    // unpack username and password from req.body
    const {
        username,
        password
    } = req.body;

    // validate
    if (username && password) {
        // password validation 
        if (password.length < 8) {
            return res.status(400).send({
                response: "Your password must be longer than 8 characters."
            });

        } else {
            try {
                // username validation
                User.query().select().where("username", username).limit(1).then(foundUser => {
                    if (foundUser.length > 0) {
                        return res.status(400).send({
                            response: "This user already exists."
                        });

                    } else {
                        bcrypt.hash(password, saltRounds).then(hash => {
                            User.query().insert({
                                username,
                                password: hash
                            }).then(newUser => {
                                return res.send({
                                    response: true
                                })
                            });
                        });
                    }

                });
            } catch (error) {
                return res.status(500).send({
                    response: "Something went wrong with the DB."
                });
            }
        }

    } else {
        return res.status(400).send({
            response: "Username or password are missing. Please try again."
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
            User.query().select().where("username", username).limit(1).then(found => {
                if (found.length > 0) { // user exists --> move on
                    // 4. bcrypt compare the password
                    bcrypt.compare(password, found[0].password).then(result => {
                        if (result) {
                            // 6. session becomes "used"
                            // Send a response based on the comparison handle session
                            req.session.signedIn = true;
                            req.session.userId = found[0].id;
                            return res.send({
                                response: true
                            });
                        }
                        // 5. responses 
                        return res.status(400).send({
                            response: "Your password is invalid."
                        });
                    });
                } else {
                    return res.status(400).send({
                        response: "Your username is invalid."
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

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;