const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('login')
})

router.post('/', (req, res) =>{
    res.send(`Your username is ${req.body.username}, and your password is ${req.body.password}.`);
    console.log(req.body.username, req.body.password)
})

module.exports = router;