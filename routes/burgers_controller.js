const express = require('express');
const router = express.Router();
const db = require('../models/');

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    db.burgers.findAll({})
        .then(dbBurgers => {
            let hbsBurgers = {
                burgers: dbBurgers
            }
            res.render('index', hbsBurgers)
        });
});

router.post('/burgers/create', (req, res) => {

    let newBurg = req.body.addBurger;

    db.burgers.create({
        burger_name: newBurg
    }).then(dbBurger => {
        console.log(`New Burger Added: ${dbBurger}`);
        res.redirect('/');
    });
});

router.post('/burgers/:id', (req, res) => {

    let id = req.params.id
    console.log(`WHAT IS THIS RIGHT HURR::: ${req.body.devoured}`)
    db.burger.update({
        devoured: req.body.devoured
    },
        {
            where: {
                id: id
            }
        }).then(dbBurger => {
            console.log(dbBurger);
            res.redirect('/');
        }).catch(err => {
            res.redirect('/');
        });
});

router.post('/delete/:id', (req, res) => {
    let id = req.params.id
    db.burger.update({
        deleted: true
    }, {
            where: {
                id: id
            }
        }).then((dbBurger) => {
            res.redirect('/');
        });
});

module.exports = router;