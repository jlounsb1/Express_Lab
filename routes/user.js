const express = require('express');
const router = express.Router(); //For a router you need the Router() with the capital

router.use((req, res, next) => {
    console.log(`User router says hello at ${Date.now()}`)
    next();
})

//for routes you have to set the base as /, then define what it is in the piece you export, usually server.js
router
    .route('/')
    .get((req, res) => {
        res.render(
            'user',
            {name: 'NeedsLogin'}
        )
    });

router.get('/:userID', (req, res) => {
    res.render(
        'user',
        {name: req.params.userID}
    )
})

module.exports = router;

    //user page