const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3000;
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static("assets"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/aboutus', (req, res) => {
    res.render('aboutUs');
});

app.get('/leagues', (req, res) => {
    res.render('leagues');
});

app.get('/franchise', (req, res) => {
    res.render('franchise');
});

app.get('/joinus', (req, res) => {
    res.render('joinUs');
});

app.post('/joinus', (req, res) => {
    console.log('success!');
});

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => console.log("Listening on localhost:3000"));