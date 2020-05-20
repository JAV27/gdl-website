const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use( express.static("assets"));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log("Listening on localhost:3000"));