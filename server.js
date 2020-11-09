const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');


// initialize express
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// listen to the server
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})