const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    console.log(`User router says hello at ${Date.now()}`)
    next();
})

router.get('/', (req, res) =>{
    res.render('login')
})

router.post('/', (req, res) =>{
    res.render(
        'index',
        {name: req.body.username}
    );
    console.log(`Your username is ${req.body.username}, and your password is ${req.body.password}.`)
    
})
//I was having trouble accessing the post data from the login form, found info in a youtube video.

module.exports = router;