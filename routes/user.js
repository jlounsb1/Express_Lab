const express = require('express');
const router = express.Router(); //For a router you need the Router() with the capital

router.use((req, res, next) => {
    console.log(`User router says hello at ${Date.now()}`)
    next();
})

//for routs you have to set the base as /, then define what it is in the piece you export, usually server.js
router
    .route('/')
    .get((req, res) => {
        res.render(
            'user',
            {name: 'NeedsLogin'}
        )
    })
    .post((req, res) => {
        res.send(`Me Dis`)
    })
    .delete((req, res) => {
        console.log(`Go away`)
    });

    router.get('./settings', (req, res) => {
        res.send(`Get user Settings`)
    });

    module.exports = router;

    //user page