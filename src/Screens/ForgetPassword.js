import React, { Component } from 'react';
import { NavbarComp, TextInput, NavbarComp2, TextInput2 } from '../component/index';
import { Person, VpnKey, ArrowRightAlt, VisibilityOff, Visibility } from '@material-ui/icons'
import { Button, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { Redirect } from 'react-router'
import firebase from '../config/firebaseConfig';


export default class ForgetPass extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            Code: null,
            VerificationCode: null,
            password: null,
            Confirm_password: null,
            isloading: true,
            ShowEmailBox: true,
            fetching: false,
        }
    }


    async validate(e) {
        const { email } = this.state
        var VerificationCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
        if (email !== null) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (re.test(email)) {
                await fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        Email: email
                    })
                }).then(r => r.json().then(data => {
                    if (!r.ok) {

                    }
                    else {
                        console.log(data.result)
                        if (data.result !== null) {
                            this.setState({
                                fetching: true
                            })
                            document.getElementById("ErrorDiv").style.display = "none";
                            fetch("https://purposewebapp.herokuapp.com/user/ResetEmail", {
                                method: "POST",
                                headers: {
                                    "content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    _id: data.result._id,
                                    FirstName: data.result.FirstName,
                                    Email: email,
                                    VerificationCode: VerificationCode,
                                    ReceiverEmailAdd: email,
                                })
                            }).then(r2 => r2.json().then(data => {
                                if (!r2.ok) {
                                }
                                else {
                                    this.setState({
                                        fetching: false,
                                        ShowCodeBox: true,
                                        ShowEmailBox: false,
                                        VerificationCode: VerificationCode
                                    })
                                    document.getElementById("ErrorDiv").style.display = "block";
                                    document.getElementById("errorScreen").innerText = "Code Send to your Mail box. Please check";
                                }

                            }))

                        }
                        else {
                            document.getElementById("ErrorDiv").style.display = "block";
                            document.getElementById("errorScreen").innerText = "We don't have any account with this email";
                        }
                    }

                }))
            }
            else {
                document.getElementById("ErrorDiv").style.display = "block";
                document.getElementById("errorScreen").innerText = "Error with email address"
            }
        }
        else {
            document.getElementById("ErrorDiv").style.display = "block";
            document.getElementById("errorScreen").innerText = "Please fill all fields first"
        }
    }

    async MatchCode() {
        const { Code, VerificationCode, email } = this.state
        if (Code !== null) {
            await fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    Email: email
                })
            }).then(r => r.json().then(data => {
                if (!r.ok) {
                }
                else {
                    if (data.result !== null) {
                        this.setState({
                            fetching: true
                        })
                        if (data.result.VerificationCode === Code) {
                            document.getElementById("ErrorDiv").style.display = "none"
                            fetch("https://purposewebapp.herokuapp.com/user/CheckCode", {
                                method: "POST",
                                headers: {
                                    "content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    _id: data.result._id
                                })
                            }).then(r => r.json().then(data => {
                                this.setState({
                                    fetching: false,
                                    ShowCodeBox: false,
                                    VerificationCode: null,
                                    NewPasswordBox: true
                                })

                            }))
                        }
                        else {
                            this.setState({
                                fetching: false
                            })
                            document.getElementById("ErrorDiv").style.display = "block";
                            document.getElementById("errorScreen").innerText = "Code not matched"
                        }
                    }
                }
            }))
        }
    }

    async ChangePass() {
        const { password, Confirm_password, email } = this.state
        if (password !== null && Confirm_password !== null) {
            if (password === Confirm_password) {
                await fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        Email: email
                    })
                }).then(r => r.json().then(data => {
                    if (!r.ok) {
                    }
                    else {
                        if (data.result !== null) {
                            this.setState({
                                fetching: true
                            })
                            document.getElementById("ErrorDiv").style.display = "none";
                            fetch("https://purposewebapp.herokuapp.com/user/ResetPassword", {
                                method: "POST",
                                headers: {
                                    "content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    _id: data.result._id,
                                    Password: password,
                                    ReceiverEmailAdd: email,
                                    Name: data.result.FirstName + data.result.LastName
                                })
                            }).then(r => r.json().then(data2 => {
                                this.setState({
                                    fetching: false,
                                    NewPasswordBox: false,
                                    isloading: false
                                })
                            }))
                        }
                    }
                }))
            }
            else {
                document.getElementById("ErrorDiv").style.display = "block";
                document.getElementById("errorScreen").innerText = "password and confirm password must be same"
            }
        }
        else {
            document.getElementById("ErrorDiv").style.display = "block";
            document.getElementById("errorScreen").innerText = "Please fill all fields first"
        }
    }


    render() {
        return <div style={{ width: "100%", height: "100%" }}>
            <div style={{ height: "50%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100, marginTop: 50 }}></div>
            <NavbarComp2 LoginBtn={<Nav.Link><Link to="login" className="LoginBtn_Design2">Login</Link></Nav.Link>} SignupBtn={<Nav.Link><Link to="Signup" style={{ color: "white", padding: 7, borderRadius: 5, border: "1px solid #6e00ff", background: "#6e00ff", paddingLeft: 15, paddingRight: 15, textDecoration: "none" }}>Signup</Link></Nav.Link>} />
            <div style={{ padding: 10 }}>

                <div className="LoginForm">
                    <h3>Password reset</h3>
                    <p style={{ color: "rgb(202, 191, 191)" }}>Enter your email below to proceed.</p>
                    <br />
                    <div id="ErrorDiv" style={{ width: "90%", margin: "0 auto", background: "goldenrod", textAlign: "center", lineHeight: "40px", paddingRight: 8, paddingLeft: 8, paddingTop: 8 }}>
                        <p id="errorScreen" style={{ color: "white" }}></p>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        {this.state.ShowEmailBox && <div>
                            Email address
                            <TextInput2 type="email" placeholder="name@example.com" icon={<Person />} HandleChange={(e) => this.setState({ email: e.target.value })} />
                        </div>}
                        {this.state.ShowCodeBox && <div>
                            Code
                            <TextInput2 type="number" placeholder="Enter 4 digit code" icon={<VpnKey />} HandleChange={(e) => this.setState({ Code: e.target.value })} />
                        </div>}
                        {this.state.NewPasswordBox && <div>
                            Password
                            <TextInput2 type={this.state.PasswordShow ? "password" : "text"} PasswordIcon={this.state.PasswordShow ? <Visibility /> : <VisibilityOff />} HideShow_Password={() => this.setState({ PasswordShow: !this.state.PasswordShow })} placeholder="*******" icon={<VpnKey />} HandleChange={(e) => this.setState({ password: e.target.value })} />
                            <br />
                            Confirm password
                            <TextInput2 type="password" placeholder="*******" icon={<VpnKey />} HandleChange={(e) => this.setState({ Confirm_password: e.target.value })} /></div>
                        }

                    </div>
                    <br />
                    {this.state.ShowCodeBox && <Button variant="primary" style={{ borderRadius: 20, width: 175, background: "rgb(60, 77, 235)" }} onClick={() => this.MatchCode()}>{this.state.fetching ? "Loading" : "Check Code"} <ArrowRightAlt /></Button>}
                    {this.state.NewPasswordBox && <Button variant="primary" style={{ borderRadius: 20, width: 175, background: "rgb(60, 77, 235)" }} onClick={() => this.ChangePass()}>{this.state.fetching ? "Loading" : "Reset password"}<ArrowRightAlt /></Button>}
                    {this.state.ShowEmailBox && <Button variant="primary" style={{ borderRadius: 20, width: 175, background: "rgb(60, 77, 235)" }} onClick={() => this.validate()}>{this.state.fetching ? "Loading" : "Send Email"}<ArrowRightAlt /></Button>}

                    <hr />
                    <p>Not registered?<Link to="Signup">Create account</Link></p>
                </div>

            </div>
            {!this.state.isloading && <Redirect to="login" push={true} />}
        </div>
    }
}