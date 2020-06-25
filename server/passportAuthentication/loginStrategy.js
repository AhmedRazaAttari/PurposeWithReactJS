const Strategy = require('passport-local');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const loginStrategy = new Strategy({ usernameField: 'Email' }, function (Email, Password, cb) {
    // Search user by email in DB
    const user = User.find({ Email: Email });

    if (!user.length) {
        return cb({ message: 'No user found!!', statusCode: 400 }, null);
    }

    //Compare Password
    const userPassword = user[0].Password;
    const isPasswordValid = bcrypt.compareSync(Password, userPassword);

    if (!isPasswordValid) {
        return cb({ message: 'Email or Password is incorrect', statusCode: 400 }, null);
    }
    const currentUser = user[0];
    cb(null, currentUser);
});

module.exports = loginStrategy;