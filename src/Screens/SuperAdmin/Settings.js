import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Search, Payment, Facebook, Twitter, LinkedIn, AccountBalance } from '@material-ui/icons';
import '../../admin.css';
import { Checkbox, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';

export default class AddEmailTemplate extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
        }
    }

    async ShowingSideBar() {
        var _ = this;
        await this.setState({
            ShowSidebar: !this.state.ShowSidebar
        })
        this.SetDivForREsponsive()
    }

    SetDivForREsponsive() {
        const ShowSidebar = this.state.ShowSidebar
        console.log(ShowSidebar)

        if (ShowSidebar === true) {
            if ($(".AllContent").width() <= 954) {
                $(".Verification").css("display", "none")
                $(".Personal_Detail").css("width", "100%")
            }

            if ($(".AllContent").width() > 954) {
                $(".Verification").css("display", "none")
                $(".Personal_Detail").css("width", "100%")
            }
        }

        else {
            $(".Verification").css("display", "")
            $(".Personal_Detail").css("width", "")
        }
    }

    componentDidMount() {

        $(".SearchBarDiv").click(function (e) {
            e.stopPropagation();
            $(".SearchBarDiv").css("display", "none")
            $("body").css("overflow", "initial");
        });

        $(".Searchbox").click(function (e) {
            e.stopPropagation();
            console.log("Searchbox CLICKED")
        });

        $(".SearchResult").click(function (e) {
            e.stopPropagation();
            console.log("SearchResult CLICKED")
        });

        var _ = this;


        $(window).on("resize", function () {
            if ($(window).width() > 990) {
                _.setState({
                    CollapseNavbar: false,
                    NavExpended: false
                })
            }

        })

        const ShowSidebar = this.state.ShowSidebar
        console.log(ShowSidebar)

        if (ShowSidebar === true) {
            if ($(".AllContent").width() <= 954) {
                $(".Verification").css("display", "none")
                $(".Personal_Detail").css("width", "100%")
            }

            if ($(".AllContent").width() > 954) {
                $(".Verification").css("display", "none")
                $(".Personal_Detail").css("width", "100%")
            }
        }

        else {
            $(".Verification").css("display", "")
            $(".Personal_Detail").css("width", "")
        }
    }

    ONToggleFunc() {
        this.setState({
            NavExpended: !this.state.NavExpended
        })
    }

    ShowSearchBar() {
        $(".SearchBarDiv").css("display", "flex")
        $("body").css("overflow", "hidden");
    }

    ChatSidebarFunc() {
        this.setState({ ShowChatSidebar: true })
        $("body").css("overflow", "hidden");
        $("#For_SetOpacity").css("opacity", ".7")
    }

    hideChatSidebar() {
        this.setState({ ShowChatSidebar: false })
        $("body").css("overflow", "initial");
        $("#For_SetOpacity").css("opacity", "1")
    }

    render() {
        return <div style={{ width: "100%", height: "100%" }}>
            <div id="For_SetOpacity" style={{ height: "55%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100 }}></div>
            <div style={{ display: "flex", width: "100%" }}>
                {this.state.ShowSidebar && <Sidebar SettingBackground="rgb(52, 91, 209)" SettingColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, display: "flex", flexDirection: "column", padding: 20, boxShadow: "#e0d5d5 0px 0px 5px 2px" }}>
                            <div id="SettingItems" >

                                <h3>Payment Method</h3>
                                <br />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                    <div>
                                        <Payment />&nbsp;Paypal
                                    </div>
                                    <Link to="/Paypal"><button style={{ border: "2px solid skyblue", borderRadius: 5, background: "white", color: "blueviolet" }}>Edit...</button></Link>
                                </div>
                                <br />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                    <div>
                                        <AccountBalance />&nbsp;Stripe (credit card)
                                    </div>
                                    <Link to="/Stripe"><button style={{ border: "2px solid skyblue", borderRadius: 5, background: "white", color: "blueviolet" }}>Edit...</button></Link>
                                </div>
                                <br />
                                <h3>Integrations</h3>
                                <br />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                    <div>
                                        <Facebook />&nbsp;facebook
                                    </div>
                                    <button style={{ border: "2px solid skyblue", borderRadius: 5, background: "white", color: "blueviolet" }} onClick={() => this.setState({ facebook: true })}>Edit...</button>
                                </div>
                                <br />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                    <div>
                                        <Twitter />&nbsp;twitter
                                    </div>
                                    <button style={{ border: "2px solid skyblue", borderRadius: 5, background: "white", color: "blueviolet" }} onClick={() => this.setState({ Twitter: true })}>Edit...</button>
                                </div>
                                <br />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                    <div>
                                        <LinkedIn />&nbsp;LinkedIn
                                    </div>
                                    <button style={{ border: "2px solid skyblue", borderRadius: 5, background: "white", color: "blueviolet" }} onClick={() => this.setState({ LinkedIn: true })}>Edit...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BottomTab />
                </div>
                <div className="SearchBarDiv">
                    <div className="animated slideInDown Searchbox">
                        <div style={{ width: 45, height: 40, padding: 8 }}>
                            <Search />
                        </div>
                        <input type="text" placeholder="Type and Hit Enter" style={{ width: 200, height: 40, outline: "none", border: "none", fontSize: 21, color: "grey" }} />
                    </div>

                    <div className="animated slideInDown SearchResult">
                        <div style={{ padding: 25 }}>
                            <p>Search Suggestions</p>
                            <div className="ResultLinks">
                                <a><Search />&nbsp;&nbsp;<small style={{ fontSize: 17 }}>macbook pro</small>&nbsp;&nbsp;<small>in laptop</small></a><br />
                            </div>
                            <div className="ResultLinks">
                                <a><Search />&nbsp;&nbsp;<small style={{ fontSize: 17 }}>Iphone 8</small>&nbsp;&nbsp;<small>in smartphones</small></a><br />
                            </div>
                            <div className="ResultLinks">
                                <a><Search />&nbsp;&nbsp;<small style={{ fontSize: 17 }}>macbook pro</small>&nbsp;&nbsp;<small>in laptop</small></a><br />
                            </div>
                            <div className="ResultLinks">
                                <a><Search />&nbsp;&nbsp;<small style={{ fontSize: 17 }}>beats pro solo 3</small>&nbsp;&nbsp;<small>in Headphones</small></a><br />
                            </div>
                            <div className="ResultLinks">
                                <a><Search />&nbsp;&nbsp;<small style={{ fontSize: 17 }}>samsung galaxy 10</small>&nbsp;&nbsp;<small>in Phones</small></a><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.ShowChatSidebar && <ChatSideBar HideSidebar={() => this.hideChatSidebar()} />}
            {this.state.Shownotification && <TabNotification />}
            {this.state.facebook && <Modal show={this.state.facebook} onHide={() => this.setState({ facebook: false })} style={{ background: "rgba(31,45,61,.3)" }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Facebook login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Email address</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="pasword" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({ facebook: false })}>
                        Login
                    </Button>
                    <Button variant="secondary" onClick={() => this.setState({ facebook: false })}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>}
            {this.state.Twitter && <Modal show={this.state.Twitter} onHide={() => this.setState({ Twitter: false })} style={{ background: "rgba(31,45,61,.3)" }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Twitter login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Email address / Username</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="password" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({ Twitter: false })}>
                        Login
                    </Button>
                    <Button variant="secondary" onClick={() => this.setState({ Twitter: false })}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>}
            {this.state.LinkedIn && <Modal show={this.state.LinkedIn} onHide={() => this.setState({ LinkedIn: false })} style={{ background: "rgba(31,45,61,.3)" }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>LinkedIn login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Email address / Username</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Control type="password" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({ LinkedIn: false })}>
                        Login
                    </Button>
                    <Button variant="secondary" onClick={() => this.setState({ LinkedIn: false })}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>}
        </div>
    }
}
