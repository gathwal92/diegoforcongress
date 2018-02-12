const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const bodyParser = require('body-parser');
const stripe = require("stripe")("sk_live_bhBmieHSHgkd8eiFMUCAOizN");
const env = process.env.NODE_ENV || 'development';

const app = express();
const compiler = webpack(webpackConfig);

var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

if (env === 'production') {
    app.use(forceSsl);
}

app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/dist/'));

app.post('/api/charge', (req, res) => {

    var token = req.body.token;
    var cardholderFirstName = req.body.cardholderFirstName;
    var cardholderMiddleName = req.body.cardholderMiddleName;
    var cardholderLastName = req.body.cardholderLastName;
    var email = req.body.email;
    var addressLineOne = req.body.addressLineOne;
    var addressLineTwo = req.body.addressLineTwo;
    var city = req.body.city;
    var state = req.body.state;
    var zipCode = req.body.zipCode;
    var phone = req.body.phone;
    var occupation = req.body.occupation;
    var employer = req.body.employer;
    var chargeAmount = req.body.chargeAmount;
    
    // remove all commas
    chargeAmount = chargeAmount.replace(/,/g, "");

    var charge = stripe
    .charges
    .create({
        amount: chargeAmount * 100,
        currency: "usd",
        source: token,
        description: "Diego Morales Donation",
        receipt_email: email,
        metadata: {
            'First Name': cardholderFirstName,
            'Middle Name': cardholderMiddleName,
            'Last Name': cardholderLastName,
            'Email': email,
            'Address Line 1': addressLineOne,
            'Address Line 2': addressLineTwo,
            'City': city,
            'State': state,
            'Zip': zipCode,
            'Phone': phone,
            'Occupation': occupation,
            'Employer': employer
        }
    }, function (err, charge) {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.status(200);
            res.send('success');
        }
    });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
