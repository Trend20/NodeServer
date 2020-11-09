const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');


// initialize express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// PORT
const PORT = process.env.PORT || 3000;

// ROUTES
app.get('/', (req, res) => {
    res.render('welcome');
});

// listen to the server
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})