const router = require('express').Router();

const Coffee = require('../models/Coffee.js');

const fs = require('fs');

// Render views
const header = fs.readFileSync('./public/fragments/header.html', 'utf8');
const navbarIndex = fs.readFileSync('./public/fragments/navbarIndex.html', 'utf8');
const navbarUser = fs.readFileSync('./public/fragments/navbarUser.html', 'utf8');
const footer = fs.readFileSync('./public/fragments/footer.html', 'utf8');

const coffees = fs.readFileSync('./public/coffees/coffees.html', 'utf8');
const coffee = fs.readFileSync('./public/coffees/coffee/coffee.html', 'utf8');


router.get('/coffees', (req, res) => {
    if (req.session.signedIn) {
        return res.send(header + navbarUser + coffees + footer);
    }
    return res.send(header + navbarIndex + coffees + footer);
});

router.get('/coffee/:id', (req, res) => {
    if (req.session.signedIn) {
        return res.send(header + navbarUser + coffee + footer);
    }
    return res.send(header + navbarIndex + coffee + footer);
});

/*
    getting all coffees (including their categories)
*/
router.get('/coffees/data', async (req, res) => {
    try {
        const coffees = await Coffee.query().select('coffees.*', 'categories.category').join('categories', 'coffees.category_id', '=', 'categories.id');
        return res.send({ response: coffees });
    } catch (error) {
        return res.send({ response: "Error in database" + error });
    }
});


/*
    getting coffees by their unique id
*/
router.get('/coffee/data/:id', async (req, res) => {
    try {
        const coffee = await Coffee.query().select('coffees.*').where('id', req.params.id);
        return res.send({ response: coffee });
    } catch (error) {
        return res.send({ response: "Error in database " + error });
    }
});

module.exports = router;