const router = require('express').Router();

const User = require('../models/User.js');

const fs = require('fs');

// Render views
const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const navbarUser = fs.readFileSync('./public/fragments/navbarUser.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');

const homeUser = fs.readFileSync('./public/home/homeUser.html', 'utf8');

router.get('/user', async (req, res) => {
    if (req.session.signedIn) {
        return res.send(header + navbarUser + homeUser + footer);
    }
    return res.redirect('/login');
});

// getting all users- (id & username)
router.get('/users', async (req, res) => {
    const allUsers = await User.query().select('id').select('username');  // .select('password')  --> also with the hashed passwords
    return res.send({
        response: allUsers
    });

});

module.exports = router;