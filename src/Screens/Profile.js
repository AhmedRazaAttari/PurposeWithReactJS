import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, TextInput, SideBarForSmallScreen } from '../component';
import $ from 'jquery';
import { AccessTime, Star, Favorite, Whatshot, Person, Payment, PhoneEnabled, Mail, Facebook, Done, ShoppingCart, Search, CastConnected, RemoveRedEye, VpnKey, Visibility, VisibilityOff } from '@material-ui/icons';
import first from '../assets/images/Chats/first.jpg'
import TextField from '@material-ui/core/TextField';
import { Form, Row, Col, Button, Modal, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

export default class Profile extends Component {

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

        // if($(".sidebar").css("display","none")){
        //     $(".Verification").css("display", "")
        // }

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
                // $(".Personal_Info").css({
                //     width: "100%",
                //     "border-radius": "0"
                // })
                // $(".TopTabs").css("display", "block")
                // $(".ProfileTabs").css("display", "none")
                // // $("#ProfileTopTabs.navbar").css("padding", "0")
                // $("#AllProfileContent").css({
                //     "flex-direction": "column",
                //     "padding": "0px 0px",
                //     "flex-wrap": "unset",
                // })
                // $(".Personal_Detail").css("width", "100%")
                // $(".Personal_Detail div").css("width", "90%")
                // $(".Personal_Detail input, .Personal_Detail select").css("width", "100%")
                // $(".Verification").css("width","100%")

            }
        }

        else {
            $(".Verification").css("display", "")
            $(".Personal_Detail").css("width", "")

            // $(".Personal_Info").css({
            //     width: "",
            //     "border-radius": ""
            // })
            // $(".TopTabs").css("display", "none")
            // $(".ProfileTabs").css("display", "flex")
            // $("#ProfileTopTabs.navbar").css("padding", "")
            // $("#AllProfileContent").css({
            //     "flex-direction": "",
            //     "padding": "",
            //     "flex-wrap": "",
            // })
            // $(".Personal_Detail").css("width", "")
            // $(".Personal_Detail div").css("width", "")
            // $(".Personal_Detail input, .Personal_Detail select").css("width", "")
            // $(".Verification").css("width","")

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
                {this.state.ShowSidebar && <Sidebar />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />

                    <div id="AllProfileContent" style={{ width: "100%", background: "white", position: "relative", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: 0 }}>
                        <div>
                            <div className="TopTabs">
                                <Navbar variant="dark" id="ProfileTopTabs">
                                    <Nav className="mr-auto">
                                        <li style={{ background: "rgb(39, 49, 136)" }}><Link to="/Profile" style={{ color: "white" }}>Profile</Link></li>
                                        <li><Link to="/ProfileNotification">Notifications</Link></li>
                                        <li><Link to="/ProfileVerification">Verification</Link></li>
                                        <li><Link to="/ProfileAccount">Account</Link></li>
                                        <li><Link to="/ProfilePayment">Payment</Link></li>
                                    </Nav>
                                </Navbar>
                            </div>
                            <div className="Personal_Info" >
                                <img src={first} style={{ width: 85, height: 85, borderRadius: "100%" }} />
                                <br />
                                <h5>Heather Parker</h5>
                                <p style={{ color: "#ccc0c0" }}>Web Architect</p>
                                <small>I'm Online!</small>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                                    <span><Favorite color="white" />&nbsp;&nbsp;Hounslow, United Kingdom</span>
                                    <span><AccessTime color="white" />&nbsp;&nbsp;It's currently 9:44 pm here</span>
                                    <span><Star color="white" />&nbsp;&nbsp;Joined February 20, 2020</span>
                                    <span><Favorite color="white" />&nbsp;&nbsp;0 Recommendations</span>
                                </div>
                            </div>
                            <br />
                            <div className="ProfileTabs" style={{ background: "#f7f4f4" }}>
                                <li style={{ background: "rgb(60, 77, 225)" }}><Link to="/Profile" style={{ color: "white" }}>Profile</Link></li>
                                <li><Link to="/ProfileNotification">Notifications</Link></li>
                                <li><Link to="/ProfileVerification">Verification</Link></li>
                                <li><Link to="/ProfileAccount">Account</Link></li>
                                <li><Link to="/ProfilePayment">Payment</Link></li>
                            </div>
                        </div>

                        <div className="Personal_Detail" style={{ padding: 10 }}>
                            <div style={{ width: "100%", height: 120, borderRadius: 8, background: "#ffab00", display: "flex", justifyContent: "space-between", alignItems: "center", padding: 20, flexWrap: "wrap" }}>
                                <div>
                                    <div style={{ display: "flex" }}>
                                        <img src={first} style={{ width: 60, height: 60, borderRadius: "100%" }} />
                                        <div style={{ marginLeft: 15, marginTop: 8 }}>
                                            <h5 style={{ marginBottom: -5 }}>Heather Wright</h5>
                                            <small>Change avatar</small>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button style={{ padding: 4, paddingLeft: 15, paddingRight: 15, borderRadius: 20, border: "none", background: "white" }}><Whatshot />&nbsp;&nbsp;Upgrade to Pro</button>
                                </div>
                            </div>
                            <div style={{ display: "flex", paddingTop: 10 }}>
                                <button style={{ width: 170, padding: 4, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 5 }}><RemoveRedEye />&nbsp;Your account</button>
                                <button style={{ width: 180, marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 5 }}><CastConnected />&nbsp;Socail Connect</button>
                            </div>
                            <br />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <div>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter your First name" />
                                    </Form.Group>
                                </div>
                                <div id="SecondInput">
                                    <Form.Group controlId="exampleForm.ControlInput1" >
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="name" placeholder="Also your Last name" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <div>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                        <small style={{ color: "black", fontSize: 10 }}>This is the main email address that we'll send notifications.</small>
                                    </Form.Group>
                                </div>
                                <div id="SecondInput">
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" placeholder="+40-777 245 549" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <div >
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="City" />
                                    </Form.Group>
                                </div>
                                <div id="SecondInput">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control as="select">
                                            <option>Pakistan</option>
                                            <option>India</option>
                                            <option>America</option>
                                            <option>Saudia</option>
                                            <option>Iran</option>
                                            <option>Bangladesh</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <div>
                                    <Form.Label>Password</Form.Label>
                                    <TextInput type={this.state.PasswordShow ? "password" : "text"} placeholder="Password" icon={<VpnKey />} PasswordIcon={this.state.PasswordShow ? <Visibility /> : <VisibilityOff />} HideShow_Password={() => this.setState({ PasswordShow: !this.state.PasswordShow })} HandleChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <div id="SecondInput">
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select">
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Rather Not say</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                            <div style={{display : "flex"}}>
                                <Button variant="primary" style={{width : 165}} onClick={() => this.setState({ ChangeEmail: !this.state.ChangeEmail })}>Change Email</Button>&nbsp;&nbsp;<Button variant="primary" style={{width : 165}} onClick={() => this.setState({ ChangePassword: !this.state.ChangePassword })}>Change Password</Button>&nbsp;&nbsp;<Button variant="primary" style={{width : 135}}>Save</Button>
                            </div>
                        </div>
                        <div className="Verification">
                            <div className="Vertification_header">
                                <h4>Verifications</h4>
                            </div>
                            <div className="VerifiedItems">
                                <div>
                                    <PhoneEnabled color="blue" />&nbsp;Phone Verified
                                    </div>
                                <Done color="blue" />
                            </div>
                            <div className="VerifiedItems">
                                <div>
                                    <Mail color="blue" />&nbsp;Email Verified
                                    </div>
                                <Done color="blue" />
                            </div>
                        </div>
                    </div>
                    <SideBarForSmallScreen />
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
            {this.state.ChangeEmail && <Modal show={this.state.ChangeEmail} onHide={() => this.setState({ ChangeEmail: false })} >
                <Modal.Header closeButton>
                    <Modal.Title>Update Email Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Current Password (if changing Email)</Form.Label>
                        <Form.Control type="password" placeholder="12345" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({ ChangeEmail: false })}>
                        Update Email Address
                    </Button>
                    <Button variant="secondary" onClick={() => this.setState({ ChangeEmail: false })}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}
            {this.state.ChangePassword && <Modal show={this.state.ChangePassword} onHide={() => this.setState({ ChangePassword: false })} >
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.setState({ ChangePassword: false })}>
                        Change Password
                    </Button>
                    <Button variant="secondary" onClick={() => this.setState({ ChangePassword: false })}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}
        </div>
    }
}
