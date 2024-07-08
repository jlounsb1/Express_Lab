const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const pug = require('pug');

app.set('view engine', 'pug');

const logReq = function(req, res, next) {
    console.log('Merp');
    next();
}

app.use(logReq)

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});


app.use(express.static('public')) // This is to set up a basic static page as the home.
app.use(express.static('./styles')) // use stylesheet in the apporopriate folder


app.get('/', (req, res) => {
    res.render(
        'index',
        {name:'Jeff'}
    )
})

app.get('/about', (req, res) => {
    res.render(
        'about',
        {name:'Radar'}
    )
})