const express = require('express');
const router = express.Router();
const Admin = require('../model/Admin');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {

    const user = await Admin.find({ Email: req.body.Email });

    if (!user.length) {
        return res.status(500).json({
            message: "Mail not found user doen't exists"
        })
    }

    if (req.body.Password !== user[0].Password) {
        res.status(401).json({
            message: "Auth Failed"
        })
    } else {
        //Generate Token
        res.status(200).json({
            message: "Auth Success",
            user: user
        })
    }
})



router.post('/getProfile', function (req, res) {

    Admin.findOne({ Email: req.body.Email })
        .then(result => {
            return res.status(200).json({
                result: result
            })
        })
        .catch(error => {
            return res.send(404).json({
                message: error
            })
        })
});


module.exports = router;