import React, { Component } from 'react';
import { Home } from '@material-ui/icons';
import {
    Link, useHistory
} from "react-router-dom";

export default class page404 extends Component {

    render() {
        return <div style={{ display: "flex", flex: 1, justifyContent: "center", alignItems: "center", height: "100vh", width: "100%", background: "rgb(60, 77, 235)", color: "white" }}>
            <div>
                <h1 >404</h1>
                <br />
                <h4>Sorry, the page you are looking for could not be found.</h4>
                <br />
                <button style={{ width: 170, height: 40, background: "white", color: "rgb(60, 77, 235)", border: "none", borderRadius: 20, }}><Link to="/"><Home />&nbsp;Return home</Link></button>
            </div>
        </div>
    }
}