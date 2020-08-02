const router = require('express').Router();

const User = require('../models/User.js');

const fs = require('fs');

// Render views
const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const navbarUser = fs.readFileSync('./public/fragments/navbarUser.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');

const homeUser = fs.readFileSync('./public/home/homeUser.html', 'utf8');

router.get('/user', (req, res) => {
    if (req.session.signedIn) {
        return res.send(header + navbarUser + homeUser + footer);
    }
    return res.redirect('/login');
});

router.get('/users/data/:id', async (req, res) => {
        if (req.session.signedIn) {
            const userWithCoffees = await User.query().select('username').withGraphFetched('coffees').where('id', req.params.id);

            return res.send(userWithCoffees);
            
        } else {
            res.send('Please login to view this page!');
        }
        res.end();
});

router.get('/users/data', async (req, res) => {
    if (req.session.signedIn) {
        const allUsersWithCoffees = await User.query().select('username').withGraphFetched('coffees');

        return res.send(allUsersWithCoffees);
        
    } else {
        res.send('Please login to view this page!');
    }
    res.end();
});

module.exports = router;