const express = require('express');
const router = express.Router();
const Admin = require('../model/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/login', async (req, res) => {

    //Check Email
    const user = await Admin.find({ Email: req.body.Email });

    if (!user.length) {
        return res.status(500).json({
            message: "Mail not found user doen't exists"
        })
    }
    else {
        res.status(200).json({
            message: "Auth Success",
            Token: token,
            user: user
        })
    }
    // Compare Password
    // const passwordMatched = bcrypt.compareSync(req.body.Password, user[0].Password);

    // if (!passwordMatched) {
    //     res.status(401).json({
    //         message: "Auth Failed"
    //     })
    // } else {
    //     //Generate Token
    //     const token = jwt.sign({ user: user[0] }, 'AhmedRaza786', { expiresIn: "1h" });
    // res.status(200).json({
    //     message: "Auth Success",
    //     Token: token,
    //     user: user
    // })
    // }

})
