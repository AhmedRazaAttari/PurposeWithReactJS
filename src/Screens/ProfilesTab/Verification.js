import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, TextInput, SideBarForSmallScreen } from '../../component';
import $ from 'jquery';
import { Search, Check } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { Form, Row, Col, Button, Modal, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import Page from './Account';

export default class Verification extends Component {

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

                    <div id="AllProfileContent" style={{ height : 600, width: "100%", background: "white", position: "relative", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingLeft: 0, paddingRight: 0 }}>
                        <div>
                            <div className="TopTabs">
                                <Navbar variant="dark" id="ProfileTopTabs">
                                    <Nav className="mr-auto">
                                        <li><Link to="/Profile" >Profile</Link></li>
                                        <li><Link to="/ProfileNotification">Notifications</Link></li>
                                        <li style={{ background: "rgb(39, 49, 136)" }}><Link to="/ProfileVerification" style={{ color: "white" }}>Verification</Link></li>
                                        <li><Link to="/ProfileAccount">Account</Link></li>
                                        <li><Link to="/ProfilePayment">Payment</Link></li>
                                    </Nav>
                                </Navbar>
                            </div>

                            <div className="ProfileTabs"  style={{ background: "#f7f4f4" }}>
                                <li ><Link to="/Profile" >Profile</Link></li>
                                <li><Link to="/ProfileNotification">Notifications</Link></li>
                                <li style={{ background: "rgb(60, 77, 225)" }}><Link to="/ProfileVerification" style={{ color: "white" }}>Verification</Link></li>
                                <li><Link to="/ProfileAccount">Account</Link></li>
                                <li ><Link to="/ProfilePayment" >Payment</Link></li>
                            </div>
                        </div>
                        <div style={{ width: "100%", padding: 15 }}>
                            <h2>Verification</h2>
                            <br />
                            <div className="VerificationsStep">
                                <div>
                                    <div className="StepCircle"></div>
                                    <b style={{ color: "cornflowerblue" }}>Email</b>
                                </div>
                                <div>
                                    <div className="StepCircle" style={{ marginLeft: 13 }}><Check /></div>
                                    <b style={{ color: "cornflowerblue" }}>Phone</b>
                                </div>
                                <div>
                                    <div className="StepCircle" style={{ marginLeft: 15 }}><Check /></div>
                                    <b style={{ color: "cornflowerblue" }}>Down</b>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div id="Verified" style={{ display: "flex", justifyContent: "space-between" }}>
                                <b>Email Address</b>
                                <b>Verified</b>
                            </div>
                            <hr />
                            <div id="Verified" style={{ display: "flex", justifyContent: "space-between" ,alignItems: "center" }}>
                                <b>Phone Number</b>
                                <div >
                                    <b>Not Verified</b><br />
                                    <Link style={{ color: "orange" }}>Verify now</Link>
                                </div>
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

        </div>
    }
}
