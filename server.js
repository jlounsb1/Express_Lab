const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const pug = require('pug');
const userRoutes = require('./routes/user')
const login = require('./routes/login')


const logReq = function(req, res, next) {
    console.log('Merp');
    next();
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//found the need for these middleware on a youtube video
app.use(logReq)
app.use('/user', userRoutes); // makes the user file a piece of middleware only used when on the user path as defined in this function
app.use(express.static('public')) // This is to set up a basic static page as the home.
app.use(express.static('styles')) // use stylesheet in the apporopriate folder
app.use('/login', login)


app.set("views", "./views");
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(
        'index',
        {name:"Jeff"}
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

app.post('/', (req, res) => {
    res.download('public/radar.jpg' )
})



app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});

const users = []
