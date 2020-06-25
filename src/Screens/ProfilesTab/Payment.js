import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, TextInput, SideBarForSmallScreen } from '../../component';
import $ from 'jquery';
import { Search, Check, Cancel, ChatBubble } from '@material-ui/icons';
import { TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Form, Row, Col, Button, Modal, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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

export default class ProfilePayment extends Component {

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
                // $("#PromoCodeResponsive").css("display","block")
                // $("#PromoCodeIn_BigScreen").css("display","none")
                $("#PaymentDetaildiv").css("width","500px")
            }

            if ($(".AllContent").width() > 954) {
                // $("#PromoCodeResponsive").css("display","block")
                // $("#PromoCodeIn_BigScreen").css("display","none")
                $("#PaymentDetaildiv").css("width","500px")
            }
        }

        else {
            $("#PromoCodeResponsive").css("display","none")
            $("#PromoCodeIn_BigScreen").css("display","block")
            $("#PaymentDetaildiv").css("width","")
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
                // $("#PromoCodeResponsive").css("display","block")
                // $("#PromoCodeIn_BigScreen").css("display","none")
                $("#PaymentDetaildiv").css("width","500px")
            }

            if ($(".AllContent").width() > 954) {
                // $("#PromoCodeResponsive").css("display","block")
                // $("#PromoCodeIn_BigScreen").css("display","none")
                $("#PaymentDetaildiv").css("width","500px")
            }
        }

        else {
            $("#PromoCodeResponsive").css("display","none")
            $("#PromoCodeIn_BigScreen").css("display","block")
            $("#PaymentDetaildiv").css("width","")
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

                    <div id="AllProfileContent" style={{ flexWrap: "wrap", width: "100%", background: "white", position: "relative", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingLeft: 0, paddingRight: 0 }}>
                        <div>
                            <div className="TopTabs">
                                <Navbar variant="dark" id="ProfileTopTabs">
                                    <Nav className="mr-auto">
                                        <li ><Link to="/Profile">Profile</Link></li>
                                        <li><Link to="/ProfileNotification">Notifications</Link></li>
                                        <li><Link to="/ProfileVerification">Verification</Link></li>
                                        <li><Link to="/ProfileAccount">Account</Link></li>
                                        <li style={{ background: "rgb(39, 49, 136)" }}><Link to="/ProfilePayment" style={{ color: "white" }}>Payment</Link></li>
                                    </Nav>
                                </Navbar>
                            </div>

                            <div className="ProfileTabs"  style={{ background: "#f7f4f4" }}>
                                <li ><Link to="/Profile" >Profile</Link></li>
                                <li><Link to="/ProfileNotification">Notifications</Link></li>
                                <li><Link to="/ProfileVerification">Verification</Link></li>
                                <li><Link to="/ProfileAccount">Account</Link></li>
                                <li style={{ background: "rgb(60, 77, 225)" }}><Link to="/ProfilePayment" style={{ color: "white" }}>Payment</Link></li>
                            </div>

                            <div id="PromoCodeResponsive">
                                <div className="PromoCode">
                                    <div className="PromoHeader">Promo Code</div>
                                    <div style={{ padding: 20 }}>
                                        <p>Get a Professional Code</p>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Enter it here</Form.Label>
                                            <Form.Control type="text" placeholder="" />
                                        </Form.Group>
                                        <button>Radeem</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="PaymentDetaildiv" style={{ display: "flex", flexDirection: "column", padding: 15 }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h2>Payment options</h2>
                                    <p>You're just one step away from starting you subscription plan</p>
                                </div>
                                <Link to="/ProfileAccount"><b>Select a different Plan</b></Link>
                            </div>
                            <br />
                            <div style={{ display: "flex", padding: 10 }}>
                                <div style={{ background: "white" }}>
                                    <RadioGroup aria-label="gender" name="gender1">
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <FormControlLabel value="Free £0.00" control={<Radio />} label="Pay Monthly" />
                                            <p><strike>US$23.99</strike>&nbsp;US$16.79 per month</p>
                                            <FormControlLabel value="Change Plan" control={<Radio />} label="Change Plan" />
                                            <p><strike>US$16.49</strike>&nbsp;US$11.54 * 6</p>
                                        </div>
                                    </RadioGroup>
                                    <br />
                                    <div style={{ width: "90%", padding: 5, background: "#64d864", color: "white" }}>
                                        <b>Special descount 30% off today's offer</b>
                                        <p>Your discount automatically applied to today's payment</p>
                                    </div>
                                </div>
                                <div style={{ background: "#fbf1f1", padding: 10, width: 250 }}>
                                    <h6>Your Subscription Include</h6>
                                    <span><Check color="brown" />&nbsp; Promotion of your new group</span><br />
                                    <span><Check color="brown" />&nbsp; Quick and easy tools for scheduling events and staying in touch with your members</span><br />
                                    <span><Check color="brown" />&nbsp; Access to customer support 7 days a week</span>
                                </div>
                            </div>
                            <br /><br />
                            <h5>Payment information</h5>
                            <RadioGroup aria-label="gender" name="gender1">
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <FormControlLabel value="Free £0.00" control={<Radio />} label="Credit or Debit card" />
                                    <FormControlLabel value="Change Plan" control={<Radio />} label="Add new card" />
                                </div>
                            </RadioGroup>
                            <br />
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="number" placeholder="4789 5697 0541 7546" />
                            </Form.Group>
                            <div style={{ display: "flex", flexWrap : "wrap" }}>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ width: 400 }}>
                                    <Form.Label>Name on Card</Form.Label>
                                    <Form.Control type="name" placeholder="John Doy" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ marginLeft: 15 }}>
                                    <Form.Label>Expiry Date</Form.Label>
                                    <Form.Control type="date" placeholder="MM/YY" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ marginLeft: 15 }}>
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control type="number" placeholder="786" />
                                </Form.Group>
                            </div>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Zip/Postal Code</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                        </div>
                        <div id="PromoCodeIn_BigScreen">
                            <div className="PromoCode">
                                <div className="PromoHeader">
                                    Promo Code
                                </div>
                                <div style={{ padding: 20 }}>
                                    <p>Get a Professional Code</p>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Enter it here</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <button>Radeem</button>
                                </div>
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

        </div>
    }
}
