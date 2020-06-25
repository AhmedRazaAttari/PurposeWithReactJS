import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, TextInput, Features, Plans, SideBarForSmallScreen } from '../../component';
import $ from 'jquery';
import { Search, Cancel, ChatBubble } from '@material-ui/icons';
import { Form, Row, Col, Button, Modal, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@material-ui/core';

import {
    Link
} from "react-router-dom";
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';
const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome to our shop",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please type your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking options to eat"
    },
    {
        id: "Asking options to eat",
        message: "Hi {previousValue}, Glad to know you !!",
        trigger: "Done"
    },
    {
        id: "Done",
        message: "Have a great day !!",
        end: true
    }
];

export default class Account extends Component {

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

            }

            if ($(".AllContent").width() > 954) {



            }
        }

        else {

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

            }

            if ($(".AllContent").width() > 954) {

            }
        }

        else {

        }
    }

    ONToggleFunc() {
        this.setState({
            NavExpended: !this.state.NavExpended
        })
    }

    async OpenChatBot(){
        await this.setState({
            chatbot: !this.state.chatbot
        })
        if(this.state.chatbot === true){
            $(".ChatIcon").css("display","flex")
        }
        else{
            $(".ChatIcon").css("display","none")
        }

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
                {this.state.ShowSidebar && <Sidebar />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />

                    <div id="AllProfileContent" style={{ width: "100%", background: "white", position: "relative", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingLeft: 0, paddingRight: 0 }}>
                        <div>
                            <div className="TopTabs">
                                <Navbar variant="dark" id="ProfileTopTabs">
                                    <Nav className="mr-auto">
                                        <li ><Link to="/Profile">Profile</Link></li>
                                        <li><Link to="/ProfileNotification">Notifications</Link></li>
                                        <li><Link to="/ProfileVerification">Verification</Link></li>
                                        <li style={{ background: "rgb(39, 49, 136)" }}><Link to="/ProfileAccount" style={{ color: "white" }}>Account</Link></li>
                                        <li><Link to="/ProfilePayment">Payment</Link></li>
                                    </Nav>
                                </Navbar>
                            </div>

                            <div className="ProfileTabs"  style={{ background: "#f7f4f4" }}>
                                <li ><Link to="/Profile" >Profile</Link></li>
                                <li><Link to="/ProfileNotification">Notifications</Link></li>
                                <li><Link to="/ProfileVerification">Verification</Link></li>
                                <li style={{ background: "rgb(60, 77, 225)" }}><Link to="/ProfileAccount" style={{ color: "white" }}>Account</Link></li>
                                <li><Link to="/ProfilePayment" >Payment</Link></li>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: "100%", background: "white", borderRadius: 15, padding: 20 }}>
                                <h3>Account</h3><br />
                                <b>Account Type</b>
                                <br />
                                <RadioGroup aria-label="gender" name="gender1">
                                    <div style={{ display: "flex" }}>
                                        <FormControlLabel value="Free £0.00" control={<Radio />} label="Free £0.00" onClick={() => this.setState({ ShowPlans: false })} />
                                        <FormControlLabel value="Change Plan" control={<Radio />} label="Change Plan" onClick={() => this.setState({ ShowPlans: true })} />
                                    </div>
                                </RadioGroup>
                                <br />
                                <p>Free trail expries in 6 months</p>
                                <br /><br />
                                <hr />
                                <br /><br />
                                {!this.state.ShowPlans && <div id="CloseAcc">
                                    <h4>Close Account</h4>
                                    <button onClick={() => this.setState({ AlertModal: true })}>Close My Account</button>
                                </div>}
                                {this.state.ShowPlans && <div className="FourthSection" id="PricingPlan">
                                    <div className="ForthSec_Handle">
                                        <Plans Heading="Free Plan" price="0" />
                                        <Features feature="Community support" />
                                        <Features feature="400+ pages" />
                                        <Features feature="100+ header variations" />
                                    </div>
                                    <div className="ForthSec_Handle">
                                        <Plans Heading="Individual Plan" price="22" />
                                        <Features feature="Community support" />
                                        <Features feature="400+ pages" />
                                        <Features feature="100+ header variations" />
                                        <Features feature="20+ home page options" />
                                        <Button variant="light" style={{ background: "#75d3eb" }}>Upgrade</Button><br />
                                    </div>
                                    <div className="ForthSec_Handle">
                                        <Plans Heading="Enterprise Plan" price="99" />
                                        <Features feature="24/7 support" />
                                        <Features feature="400+ pages" />
                                        <Features feature="200+ header variations" />
                                        <Features feature="40+ home page options" />
                                        <Features feature="E-commerce" />
                                        <Button variant="light" style={{ background: "#75d3eb" }}>Upgrade</Button><br />
                                    </div>
                                </div>}
                            </div>
                        </div>

                    </div>
                    <SideBarForSmallScreen />
                </div>
                {this.state.chatbot && <div id="ChatBot">
                    <ChatBot steps={steps} />
                </div>}
                <div className="ChatIcon" onClick={() => this.setState({ chatbot: !this.state.chatbot })}>
                    <div style={{ color: "white", fontSize: 32, display: "flex", justifyContent: "center", alignItems: "center" }}>{this.state.chatbot ? <Cancel /> : <ChatBubble />}</div>
                </div>
                {!this.state.chatbot && <div className="LiveChatDiv">
                    <div className="LiveChatheader">Need any help?</div>
                    <div style={{ padding: 10 }}>
                        <p>@ Contact us by email or</p>
                        <button style={{ border: "none", background: "white", color: "blue", outline : "none" }} onClick={() => this.OpenChatBot()}>&nbsp; Live Chat</button>
                        <br />
                        <p>Mon to Fri 9am - 8.30pm</p>
                        <p>Wednesday 10am - 7.30pm</p>
                    </div>
                </div>}
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
            {this.state.AlertModal && <Modal show={this.state.AlertModal} onHide={() => this.setState({ AlertModal: false })} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Warning !!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure do you want to close account ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({ AlertModal: false })}>
                        Ok
                    </Button>
                    <Button variant="secondary" onClick={() => this.setState({ AlertModal: false })}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            }
        </div>
    }
}





