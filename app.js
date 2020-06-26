const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 3000;
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const axios = require('axios');

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
});

app.get('/api', (req, res) => {
    res.render('api');
});

// axios.post('https://stage.api.tapinmobilesolutions.com/v2/api/public/graphql', {
//     headers: {
//         "X-Auth-PSK": "sKgeXk3WR2LHaKy8"
//     },
//     query: `
//     query {
//         publicTeams(input: {
//             skip: 0
//             take: 10
//             gender: MALE
//             birthYear: 2002
//             locationId: "5d51298538c43935d0bb66f8"
//             canBeSponsored: true
//         }) {
//             name
//         }
//     }
//     `
// }).then(
//     ({data}) => console.log(data)
// ).catch((err) => console.log(err.response.data));

app.listen(port, () => console.log("Listening on localhost:3000"));