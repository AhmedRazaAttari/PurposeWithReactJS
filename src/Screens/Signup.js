import React, { Component } from 'react';
import { Person, VpnKey, ArrowRightAlt, VisibilityOff, Visibility } from '@material-ui/icons'
import { Button, Nav } from 'react-bootstrap';
import { NavbarComp, TextInput, NavbarComp2, TextInput2 } from '../component/index';
import { Checkbox } from '@material-ui/core';
import {
    Link, Route
} from "react-router-dom";
import { Redirect } from 'react-router';
import Logo from '../assets/images/dark.png';
import email from '../assets/images/email.png';
import firebase from '../config/firebaseConfig';
import $ from 'jquery';


export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            Confirm_password: null,
            isloading: true,
            FName: null,
            LName: null,
            UserProfile: [],
            fetching: false,
        }
    }


    async validate() {
        var { email, password, Confirm_password, FName, LName } = this.state
        if (FName === "" || FName === undefined || FName === null) {
            $("#FName").css({
                "border" : "2px solid red",
            })
        }
        if (LName === "" || LName === undefined || LName === null) {
            $("#LName").css({
                "border" : "2px solid red",
            })
        }
        if (email === "" || email === undefined || email === null) {
            $("#Email").css({
                "border" : "2px solid red",
            })
        }
        if (password === "" || password === undefined || password === null) {
            $("#Pass").css({
                "border" : "2px solid red",
            })
        }
        if (Confirm_password === "" || Confirm_password === undefined || Confirm_password === null) {
            $("#CPass").css({
                "border" : "2px solid red",
            })
        }
        if (FName !== null && LName !== null && email !== null && password !== null && Confirm_password !== null) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var nameRegex = /^[a-zA-Z ]{2,30}$/;
            var passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (nameRegex.test(FName)) {
                if (nameRegex.test(LName)) {
                    if (re.test(email)) {
                        if (passRegex.test(password)) {
                            if (password === Confirm_password) {
                                var _ = this;
                                email = email.toLowerCase()
                                $("#FName").css("border", "")
                                $("#LName").css("border", "")
                                $("#Email").css("border", "")
                                $("#Pass").css("border", "")
                                $("#CPass").css("border", "")
                                firebase.auth().createUserWithEmailAndPassword(email, password)
                                    .then((resolve) => {
                                        document.getElementById("ErrorDiv").style.display = "none";
                                        console.log(resolve.user.uid)
                                        _.setState({
                                            fetching: true
                                        })
                                        fetch("https://purposewebapp.herokuapp.com/user/register", {
                                            method: "POST",
                                            headers: {
                                                "content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                _id: resolve.user.uid,
                                                Email: email,
                                                FirstName: FName,
                                                LastName: LName,
                                                Password: password
                                            })
                                        }).then(r => r.json().then(data => {
                                            if (!r.ok) {

                                                document.getElementById("ErrorDiv").style.display = "block";
                                                document.getElementById("errorScreen").innerText = data.message;
                                                _.setState({
                                                    fetching: false
                                                })
                                            }
                                            else {
                                                document.getElementById("ErrorDiv").style.display = "none";
                                                firebase.auth().currentUser.updateProfile({
                                                    displayName : FName + " " + LName
                                                })
                                                
                                                _.setState({
                                                    UserProfile: data.user,
                                                    fetching: false,
                                                    isloading: false,
                                                })
                                                window.location.reload()
                                            }
                                        }))
                                    }).catch(() => {
                                        document.getElementById("ErrorDiv").style.display = "block";
                                        document.getElementById("errorScreen").innerText = "User with the given email address already exists";
                                    })

                            }
                            else {
                                $("#Pass").css({
                                    "border" : "2px solid red",
                                })
                                $("#CPass").css({
                                    "border" : "2px solid red",
                                })
                                document.getElementById("ErrorDiv").style.display = "block";
                                document.getElementById("errorScreen").innerText = "password and confirm password must be same"
                            }
                        }
                        else {
                            $("#Pass").css({
                                "border" : "2px solid red",
                            })
                            document.getElementById("ErrorDiv").style.display = "block";
                            document.getElementById("errorScreen").innerText = "Password should contain atleast 1 Capital letter, Special character and number"
                        }

                    }
                    else {
                        $("#Email").css({
                            "border" : "2px solid red",
                        })
                        document.getElementById("ErrorDiv").style.display = "block";
                        document.getElementById("errorScreen").innerText = "Please enter valid Email address"
                    }
                }
                else {
                    $("#LName").css({
                        "border" : "2px solid red",
                    })
                    document.getElementById("ErrorDiv").style.display = "block";
                    document.getElementById("errorScreen").innerText = "Please enter valid name"
                }
            }
            else {
                $("#FName").css({
                    "border" : "2px solid red",
                })
                document.getElementById("ErrorDiv").style.display = "block";
                document.getElementById("errorScreen").innerText = "Please enter valid name"
            }
        }
        else {
            document.getElementById("ErrorDiv").style.display = "block";
            document.getElementById("errorScreen").innerText = "Please fill all fields first"
        }
    }


    render() {
        // console.log(this.state.UserProfile._id)
        return <div style={{ width: "100%", height: "100%" }}>
            <div style={{ height: "60%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100, marginTop: 50 }}></div>
            <NavbarComp2 LoginBtn={<Nav.Link><Link to="login" className="LoginBtn_Design2">Login</Link></Nav.Link>} />
            <div style={{ padding: 10 }}>
                <div className="SignupForm">
                    <h3>Create account</h3>
                    <p style={{ color: "rgb(202, 191, 191)" }}>Made with love by developers for developers.</p>
                    <br />
                    <div id="ErrorDiv" style={{ width: "90%", margin: "0 auto", background: "goldenrod", textAlign: "center", lineHeight: "40px", paddingRight: 8, paddingLeft: 8, paddingTop: 8 }}>
                        <p id="errorScreen" style={{ color: "white", }}></p>
                    </div>
                    <div style={{ marginTop: 15 }}>
                        First Name
                        <TextInput2 MainId="FName" type="name" placeholder="John" icon={<Person />} HandleChange={(e) => this.setState({ FName: e.target.value })} />
                        <br />
                        Last Name
                        <TextInput2 MainId="LName" type="name" placeholder="Snow" icon={<Person />} HandleChange={(e) => this.setState({ LName: e.target.value })} />
                        <br />
                        Email address
                        <TextInput2 MainId="Email" type="email" placeholder="name@example.com" icon={<Person />} HandleChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        Password
                        <TextInput2 MainId="Pass" type={this.state.PasswordShow ? "password" : "text"} PasswordIcon={this.state.PasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => this.setState({ PasswordShow: !this.state.PasswordShow })} placeholder="*******" icon={<VpnKey />} HandleChange={(e) => this.setState({ password: e.target.value })} />
                        <br />
                        Confirm password
                        <TextInput2 MainId="CPass" type={this.state.Conf_PasswordShow ? "password" : "text"} placeholder="*******" icon={<VpnKey />} PasswordIcon={this.state.Conf_PasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => this.setState({ Conf_PasswordShow: !this.state.Conf_PasswordShow })} HandleChange={(e) => this.setState({ Confirm_password: e.target.value })} />
                        <br />
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                size="small"
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                            <span>I agree to the <a href="#">terms and conditions</a></span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Checkbox
                                size="small"
                                inputProps={{ 'aria-label': 'checkbox with small size' }}
                            />
                            <span>I agree to the <a href="#">privacy policy</a></span>
                        </div>
                        <br />
                        <Button style={{ borderRadius: 20, width: 165, background: "rgb(60, 77, 235)" }} onClick={() => this.validate()}>{this.state.fetching ? "Loading" : "Create Account"}<ArrowRightAlt /></Button>
                        <hr />
                        <p>Already have an acocunt?<Link to="login">Sign in</Link></p>
                    </div>
                </div>
            </div>
            {!this.state.isloading && <Redirect to={{ pathname: "EmailVerification", state: { UserProfile: this.state.UserProfile } }} />}
        </div>
    }
}