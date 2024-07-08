const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
});


app.get("/", (req, res) => {
    res.send("Test to make sure everythings working")
})