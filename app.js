const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.listen(3000);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});