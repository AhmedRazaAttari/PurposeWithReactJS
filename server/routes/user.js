const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var nodeMailer = require('nodemailer');
var cron = require('node-cron');
var cors = require('cors')
router.use(cors())

router.post("/register", async (req, res) => {
    User.find({ Email: req.body.Email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                if (user[0].EmailVerified === false) {
                    return res.status(409).json({
                        message: "Email Already register but not activated! Activate it"
                    });
                }
                else {
                    return res.status(409).json({
                        message: "User with the given email address already exists"
                    });
                }
            }
            else {
                bcrypt.hash(req.body.Password, 10, (err, hash) => {
                    if (err) {
                        console.log("ERROR")
                        return res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new User({
                            _id: req.body._id,
                            Email: req.body.Email,
                            FirstName: req.body.FirstName,
                            LastName: req.body.LastName,
                            EmailVerified: false,
                            Password: hash,
                        })
                        user.save(function (err, doc) {
                            if (err) {
                                res.status(404).json({
                                    message: err
                                })
                            }
                            if (doc) {

                                let transporter = nodeMailer.createTransport({
                                    host: 'smtp.gmail.com',
                                    port: 465,
                                    secure: true,
                                    auth: {
                                        user: 'Ahmedrazaattari536@gmail.com',
                                        pass: 'oggdhfljpztxvlli'
                                    }
                                });

                                
                                let mailOptions = {
                                    from: '"Purpose" <Online.freelancer536@gmail.com>',
                                    to: doc.Email,
                                    subject: "Welcome to purpose",
                                    // text: "Welcome to purpose",
                                    html: '<div><br><br><img src="cid:unique@kreata.ee" style="width : 200px;" /><hr><br><h1>Hi  <b>' + doc.FirstName + doc.LastName + '</b> </h1><h1 style="font-size : 40px">Welcome to&nbsp;<b style="color : lightgrey; font-size : 42px;">Purpose</b></h1><br> <p style="font-size : 16px; font-weight : bold">Purpose portal is very easier to understand and user friendly, so lets get started...</p><br><div style="display : flex; align-items : center; flex-direction : row; justify-content : space-between; padding : 10px"><img src="cid:unique2@kreata.ee" style="width : 130px; height : 130px; border-radius : 100%;" /><div style="padding : 10px; text-align : center;"><p style="font-size : 16px;">First we need to verify your email address</p><br><li style="height:44px;line-height:44px; text-align:center; background : rgb(60, 77, 235); border : none; border-radius : 6px; width : 200px; list-style: none"><a href="http://localhost:3000/Dashboard?_id=' + doc._id + 'EmailVerified=true" style="color:#ffffff; text-decoration : none">Confirm my email</a></li></div></div><br><hr><br><div style="display : flex; align-items : center; flex-direction : row; justify-content : space-between; padding : 10px"><img src="cid:unique3@kreata.ee" style="width : 130px; height : 130px; border-radius : 100%;" /><div style="padding : 10px; text-align : center;"><p style="font-size : 16px;">Lets start adding your timetable, tasks & exams</p><br><button style="height:44px;line-height:39px;color: green; text-align:center; background : white; border : 2px solid rgb(60, 77, 235); border-radius : 6px; width : 200px; cursor: pointer;" onclick="myFunction()">Get Started<span style="display : none;">' + doc._id + '</span></button></div></div><br><hr><br><div style="display : flex; align-items : center; flex-direction : row; justify-content : space-between; padding : 10px"><img src="cid:unique4@kreata.ee" style="width : 130px; height : 130px; border-radius : 100%;" /><div style="padding : 10px; text-align : center;"><p style="font-size : 16px;">Download the My Study Life App on your phone or tablet</p><br><button style="height:44px;line-height:40px;color: green;text-align:center; background : white; border : 2px solid rgb(60, 77, 235); border-radius : 6px; width : 120px;">App Store</button><button style="margin-left : 15px; height:44px;line-height:38px;color: green;text-align:center; background : white; border : 2px solid rgb(60, 77, 235); border-radius : 6px; width : 120px;">Google Play</button></div></div><br><hr><br> </div>', // html body
                                    attachments: [
                                        {
                                            filename: 'logo.png',
                                            path: __dirname + '/logo.png',
                                            cid: 'unique@kreata.ee'
                                        },
                                        {
                                            filename: 'email.png',
                                            path: __dirname + '/email.png',
                                            cid: 'unique2@kreata.ee'
                                        },
                                        {
                                            filename: 'tasks.png',
                                            path: __dirname + '/tasks.png',
                                            cid: 'unique3@kreata.ee'
                                        },
                                        {
                                            filename: 'apps.png',
                                            path: __dirname + '/apps.png',
                                            cid: 'unique4@kreata.ee'
                                        },
                                    ]
                                };

                                transporter.sendMail(mailOptions, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
                                    if (info) {
                                        return res.status(200).json({
                                            result: info
                                        })
                                    }
                                });
                                return res.status(200).json({
                                    user: doc
                                })
                            }
                        })
                    }
                })
            }
        })
        .catch(error => {
            return res.status(404).json({
                message: error
            })
        })

})


router.post('/login', async (req, res) => {
    //Check Email
    const user = await User.find({ Email: req.body.Email });

    if (!user.length) {
        return res.status(500).json({
            message: "Mail not found user doen't exists"
        });
    }

    //Compare Password
    const passwordMatched = bcrypt.compareSync(req.body.Password, user[0].Password);

    if (!passwordMatched) {
        res.status(401).json({
            message: "Auth Failed"
        })
    } else {
        //Generate Token
        const token = jwt.sign({ user: user[0] }, 'AhmedRaza786', { expiresIn: "1h" });
        res.status(200).json({
            message: "Auth Success",
            Token: token,
            user: user
        })
    }

})



router.post('/getProfile', function (req, res) {

    User.findOne({ Email: req.body.Email })
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


router.post("/VerifyEmail", function (req, res) {
    User.findByIdAndUpdate({ _id: req.body._id }, { "$set": { EmailVerified: true } }, (reject, success) => {
        if (reject) {
            return res.send(401).json({
                message: reject
            })
        }
        if (success) {
            return res.status(200).json({
                UserDatail: success
            })
        }
    })
})


router.post('/ResetEmail', function (req, res) {

    User.findByIdAndUpdate({ _id: req.body._id }, { "$set": { VerificationCode: req.body.VerificationCode } }, (reject, success) => {
        if (reject) {
            res.send(401).json({
                message: reject
            })
        }
        if (success) {
            let transporter = nodeMailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'Ahmedrazaattari536@gmail.com',
                    pass: 'oggdhfljpztxvlli'
                }
            });
            let mailOptions = {
                from: '"Purpose" <Online.freelancer536@gmail.com>', // sender address
                to: req.body.ReceiverEmailAdd, // list of receivers
                subject: `Reset your Purpose Password`, // Subject line
                text: 'Reset your password', // plain text body
                html: '<div><img src="cid:unique@kreata.ee" style="width : 200px;" /><br><br><p style="font-size : 16px;">Hi&nbsp;<b>' + req.body.FirstName + '</b>, We got a request to reset your purpose password To start the process, please enter the bellow code<br /><br> <b> ' + req.body.VerificationCode + '</b><br><br>The code will expire in 15 minutes for security reasons. if you didnt make this request, simply ignore this message.</p> </div>', // html body
                attachments: [{
                    filename: 'logo.png',
                    path: __dirname + '/logo.png',
                    cid: 'unique@kreata.ee' //same cid value as in the html img src
                }]
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                if (info) {
                    return res.status(200).json({
                        result: info
                    })
                }
            })
        }
    })

});

router.post('/CheckCode', function (req, res) {

    User.findByIdAndUpdate({ _id: req.body._id }, { "$set": { VerificationCode: "" } }, (reject, success) => {
        if (reject) {
            return res.send(401).json({
                message: reject
            })
        }
        if (success) {
            return res.status(200).json({
                UserDatail: success
            })
        }
    })

})




router.post('/ResetPassword', function (req, res) {

    bcrypt.hash(req.body.Password, 10, (err, hash) => {
        if (err) {
            console.log("ERROR")
            return res.status(500).json({
                error: err
            });
        }
        else {
            User.findByIdAndUpdate({ _id: req.body._id }, { "$set": { Password: hash } }, (reject, success) => {
                if (reject) {
                    return res.send(401).json({
                        message: reject
                    })
                }
                if (success) {
                    let transporter = nodeMailer.createTransport({
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure: true,
                        auth: {
                            user: 'Ahmedrazaattari536@gmail.com',
                            pass: 'oggdhfljpztxvlli'
                        }
                    });
                    let mailOptions = {
                        from: '"Purpose" <Online.freelancer536@gmail.com>', // sender address
                        to: req.body.ReceiverEmailAdd, // list of receivers
                        subject: `Password Reset Succesfull...`, // Subject line
                        text: 'Password change succesfully', // plain text body
                        html: '<div><img src="cid:unique@kreata.ee" style="width : 200px;" /><br><br><p style="font-size : 16px;">Hi&nbsp;<b>' + req.body.Name + '</b>, Congrats your password successfully changed. keep connect with us.</p> </div>', // html body
                        attachments: [{
                            filename: 'logo.png',
                            path: __dirname + '/logo.png',
                            cid: 'unique@kreata.ee'
                        }]
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        if (info) {
                            return res.status(200).json({
                                result: info
                            })
                        }
                    });
                }
            })
        }
    })
})

module.exports = router;