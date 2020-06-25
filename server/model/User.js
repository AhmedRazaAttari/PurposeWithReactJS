const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id : String,
    Email: String,
    Password: String,
    FirstName: String,
    LastName: String,
    VerificationCode: String,
    EmailVerified: Boolean,
    ProfilePic: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;