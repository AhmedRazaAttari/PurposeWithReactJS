const express = require('express');
const app = express();
const mongoose = require('./config/db');
const db = mongoose.connection;
const bodyParser = require('body-parser');
const passport = require('./passportAuthentication');
require('dotenv').config()
var cors = require('cors')
db.once('open', function () {
    console.log("Database Connected Successfully");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening")
})

app.use(bodyParser.json());
app.use(cors())
app.use('/', require('./routes/index'));
