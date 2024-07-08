const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const pug = require('pug');
const userRoutes = require('./routes/user')

const logReq = function(req, res, next) {
    console.log('Merp');
    next();
}

app.use(logReq)
app.use('/user', userRoutes); // makes the user file a piece of middleware only used when on the user path as defined in this function
app.use(express.static('./public')) // This is to set up a basic static page as the home.
app.use(express.static('./styles')) // use stylesheet in the apporopriate folder

app.set("views", "./views");
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(
        'index',
        {name:'Jeff'}
    )
})

app.get('/u/:nameUser', (req, res) => {
    res.render(
        'index',
        {name: req.params.nameUser}
    )
})

app.get('/about', (req, res) => {
    res.render(
        'about',
        {name:'Radar'}
    )
})

app.post('/about', (req, res) =>{
    
    res.send(`<p>thanks.</p> <p>I can see the request in dev tools network, but I can't access it on my server.</p><a href='/'><button>Home</button></a>`)

    
    
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});

const users = []
