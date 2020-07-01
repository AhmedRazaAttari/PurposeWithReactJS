import React, { Component } from 'react';
import Logo from '../assets/images/dark.png';
import email from '../assets/images/email.png';
import firebase from '../config/firebaseConfig';

export default class EmailVerification extends Component {


    constructor() {
        super();

        this.state = {

        }
    }

    componentWillMount() {
        
        this.setState({
            EmailAdd: firebase.auth().currentUser.email,
            Name: firebase.auth().currentUser.displayName
        })
    }

    render() {
        // console.log(this.props.match.params)

        return <div style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
            <br />
            <img src={Logo} width={200} />
            <hr />
            <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
                <p>Welcome to Purpose, {this.state.Name}</p>
                <img src={email} style={{ width: 150, height: 150, borderRadius: "100%" }} /><br /><br />
                <small>We've sent you an email to:</small><br /><br />
                <h1 style={{ fontSize: 38, color: "grey" }}>{this.state.EmailAdd}</h1><br />
                <p>Check your inbox and click on the link in the email to activate your account </p>
                <br />
                <p>if the email doesn't arrive within 15 minutes, please check your spam/junk folder, if you haven't received the email, you can try by <a>resending it</a> &nbsp; before <a>Contacting us</a></p>
            </div>

        </div>
    }
}