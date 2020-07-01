import React, { Component } from 'react';
import { NavbarComp, TextInput, NavbarComp2, TextInput2 } from '../component/index';
import { Person, VpnKey, ArrowRightAlt, VisibilityOff, Visibility } from '@material-ui/icons'
import { Button, Nav } from 'react-bootstrap';
import {
    Link, useHistory
} from "react-router-dom";
import { Redirect } from 'react-router'
import firebase from '../config/firebaseConfig';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            isloading: true,
            fetching: false,
            PasswordShow: true
        }
    }


    async validate() {
        var { email, password } = this.state
        if (email !== null && password !== null) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (re.test(email)) {

                if (email === "superadmin@purpose.com" && password === "12345678") {
                    var _ = this;
                    firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(function (resolve) {
                            _.setState({
                                fetching: false,
                                isAdmin: true
                            })
                        })
                }

                else {
                    var _ = this;

                    _.setState({
                        fetching: true
                    })
                    email = email.toLowerCase()
                    firebase.auth().signInWithEmailAndPassword(email, password)
                        .then(function (resolve) {
                            document.getElementById("ErrorDiv").style.display = "none";
                            fetch("https://purposewebapp.herokuapp.com/user/login", {
                                method: "POST",
                                headers: {
                                    "content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    Email: email,
                                    Password: password
                                })
                            }).then(r => r.json().then(data => {
                                if (!r.ok) {
                                    _.setState({
                                        fetching: false
                                    })
                                    document.getElementById("ErrorDiv").style.display = "block";
                                    document.getElementById("errorScreen").innerText = "Incorrect email or password or both";
                                }
                                else {
                                    // console.log(data.user[0].uid)
                                    return _.setState({
                                        fetching: false,
                                        isloading: false,
                                    })

                                }
                            }))
                        })

                }

            }
            else {
                document.getElementById("ErrorDiv").style.display = "block";
                document.getElementById("errorScreen").innerText = "Please enter valid Email address"
            }
        }
        else {
            document.getElementById("ErrorDiv").style.display = "block";
            document.getElementById("errorScreen").innerText = "Please fill all fields first"
        }
    }




    render() {
        console.log(this.props.user)
        return <div style={{ width: "100%", height: "100%" }}>
            <div style={{ height: "60%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100, marginTop: 50 }}></div>
            <NavbarComp2 SignupBtn={<Nav.Link><Link to="Signup" style={{ color: "white", padding: 7, borderRadius: 5, border: "1px solid #6e00ff", background: "#6e00ff", paddingLeft: 15, paddingRight: 15, textDecoration: "none" }}>Signup</Link></Nav.Link>} />
            <div style={{ padding: 10 }}>
                <div className="LoginForm">
                    <h3>Login</h3>
                    <p style={{ color: "rgb(202, 191, 191)" }}>Sign in to your account to continue.</p>
                    <br />
                    <div id="ErrorDiv" style={{ width: "90%", margin: "0 auto", background: "goldenrod", textAlign: "center", lineHeight: "40px", paddingRight: 8, paddingLeft: 8, paddingTop: 8 }}>
                        <p id="errorScreen" style={{ color: "white", }}></p>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        Email address
                    <TextInput2 type="email" placeholder="name@example.com" icon={<Person />} HandleChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}> */}
                            Password
                        {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Link to="/ForgetPassword" style={{ textDecoration: "none", marginBottom: -8, fontSize: 13, color: "rgb(202, 191, 191)" }}>Lost password?</Link>
                                <Link to="/ForgetPassword" style={{ textDecoration: "none", marginTop: -3, fontSize: 11, marginBottom: -2, color: "rgb(202, 191, 191)", cursor: "pointer" }}>------------------</Link>
                            </div>
                        </div> */}
                        <TextInput2 type={this.state.PasswordShow ? "password" : "text"} placeholder="Password" icon={<VpnKey />} PasswordIcon={this.state.PasswordShow ? <VisibilityOff /> : <Visibility />} HideShow_Password={() => this.setState({ PasswordShow: !this.state.PasswordShow })} HandleChange={(e) => this.setState({ password: e.target.value })} />
                        {/* </div> */}
                        <br />
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <Button variant="primary" style={{ borderRadius: 20, width: 115, background: "rgb(60, 77, 235)" }} onClick={() => this.validate()}>{this.state.fetching ? "Loading" : "Sign in"} <ArrowRightAlt /></Button>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <Link to="/ForgetPassword" style={{ textDecoration: "none", marginBottom: -8, fontSize: 13, color: "rgb(202, 191, 191)" }}>Lost password?</Link>
                                <Link to="/ForgetPassword" style={{ textDecoration: "none", marginTop: -3, fontSize: 11, marginBottom: -2, color: "rgb(202, 191, 191)", cursor: "pointer" }}>------------------</Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p>Not registered? <Link to="Signup"> Create account</Link></p>
                </div>
            </div>
            {!this.state.isloading && <Redirect to="Dashboard" push={true} />}
            {this.state.isAdmin && <Redirect to="AdminDashboard" push={true} />}

        </div>
    }
}