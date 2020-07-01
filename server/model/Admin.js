const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    _id : String,
    Email: String,
    Password: String,
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;