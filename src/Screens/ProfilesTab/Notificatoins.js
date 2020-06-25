import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, TextInput } from '../../component';
import $ from 'jquery';
import { AccessTime, Star, Favorite, Whatshot, Person, Payment, PhoneEnabled, Mail, Facebook, Done, ShoppingCart, CastConnected, RemoveRedEye, VpnKey, Visibility, VisibilityOff } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { Form, Row, Col, Button, Modal, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import {
    Link
} from "react-router-dom";

export default class ProfileNotifications extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
        }
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
            <div style={{ display: "flex" }}>
                {this.state.ShowSidebar && <Sidebar />}
                <div id="For_SetOpacity" style={{ width: "100%" }}>
                    <NavbarComp Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.setState({ ShowSidebar: !this.state.ShowSidebar })} ChatBar={() => this.ChatSidebarFunc()} />

                    <div id="AllProfileContent" style={{ width: "100%", height: "100%", position: "relative", borderTopLeftRadius: 20, borderTopRightRadius: 20, flexWrap: "wrap", paddingLeft: 0, paddingRight: 0 }}>

                        <div className="TopTabs">
                            <Navbar variant="dark" id="ProfileTopTabs">
                                <Nav className="mr-auto">
                                    <li><Link to="/Profile" >Profile</Link></li>
                                    <li style={{ background: "rgb(39, 49, 136)" }}><Link to="/ProfileNotification" style={{ color: "white" }}>Notifications</Link></li>
                                    <li><Link to="/ProfileVerification">Verification</Link></li>
                                    <li><Link to="/ProfileAccount">Account</Link></li>
                                    <li><Link to="/ProfilePayment">Payment</Link></li>
                                </Nav>
                            </Navbar>
                        </div>

                        <div className="ProfileTabs" style={{ background: "#f7f4f4" }}>
                            <li style={{ width: "100%" }}><Link to="/Profile">Profile</Link></li>
                            <li style={{ background: "rgb(60, 77, 225)", width: "100%" }}><Link to="/ProfileNotification" style={{ color: "white" }}>Notifications</Link></li>
                            <li style={{ width: "100%" }}><Link to="/ProfileVerification">Verification</Link></li>
                            <li style={{ width: "100%" }}><Link to="/ProfileAccount">Account</Link></li>
                            <li style={{ width: "100%" }}><Link to="/ProfilePayment">Payment</Link></li>
                        </div>

                        <div id="NotificationOptions" style={{ borderRadius: 15, paddingLeft: 15 }}>
                            <br />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <b>Email Notification for task reminder</b>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch1"
                                    label=""
                                />

                            </div>
                            <br />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <b>SMS notifications for task reminder</b>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch2"
                                    label=""
                                />
                            </div>
                            <br />
                            <br />
                            <p>Billing notifications</p>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <b>Insufficient funds on credit card</b><br />
                                    <small>You will receive an alert when one of your favourite products has a discount price</small>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch3"
                                    label=""
                                />
                            </div>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <b>Send monthly invoices via email</b><br />
                                    <small>You will receive an alert when one of your favourite products has a discount price</small>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch4"
                                    label=""
                                />
                            </div>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <b>Your balance us almost 0</b><br />
                                    <small>You will receive an alert when one of your favourite products has a discount price</small>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch5"
                                    label=""
                                />
                            </div>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div>
                                    <b>Expire Cerdt card</b><br />
                                    <small>You will receive an alert when one of your favourite products has a discount price</small>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch6"
                                    label=""
                                />
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
