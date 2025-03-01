import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Search } from '@material-ui/icons';
import '../../admin.css';
import { Checkbox, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';

import first from '../../assets/images/Chats/first.jpg';
import Second from '../../assets/images/Chats/Second.jpg';
import Third from '../../assets/images/Chats/Third.jpg';
import Fourth from '../../assets/images/Chats/Fourth.jpg';
import Fifth from '../../assets/images/Chats/Fifth.jpg';


export default class EmailSubscribers extends Component {

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
                {this.state.ShowSidebar && <Sidebar EmailSubscriberBackground="rgb(52, 91, 209)" EmailSubscriberColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <b>Email Subscribers</b>
                                </div>
                                <div style={{ margin: 12 }}>
                                    <Button variant="primary">CSV</Button>&nbsp;
                                    <Button variant="primary">Excel</Button>&nbsp;
                                    <Button variant="primary">PDF</Button>&nbsp;
                                    <Button variant="primary">Print</Button>
                                </div>
                            </div>

                            <div style={{ padding: 20 }}>

                                <table id="EmailSubscriber">
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 12, width: 200 }}>
                                            <div>
                                                <img src={first} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>Pawandeep kumar</b>
                                            </div>
                                        </td>
                                        <td>Pawandeep@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 12, width: 200}}>
                                            <div>
                                                <img src={Second} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>Ritesh deshmukh</b>
                                            </div>
                                        </td>
                                        <td>ritesh@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 12, width: 200 }}>
                                            <div>
                                                <img src={Third} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>Salman khan</b>
                                            </div>
                                        </td>
                                        <td>salman@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 12, width: 200 }}>
                                            <div>
                                                <img src={Fourth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>Sonu nigham</b>
                                            </div>
                                        </td>
                                        <td>sonu@gmail.com</td>
                                    </tr>
                                </table>
                                <br />
                                <p>Showing 1 to 10 to 24 entries</p>
                                <br />
                                <div style={{ display: "flex", alignSelf: "center" }}>
                                    <b style={{color : "skyblue"}}>Previous</b>&nbsp;&nbsp;
                                    <Button variant="primary">1</Button>&nbsp;
                                    <Button variant="primary">2</Button>&nbsp;
                                    <Button variant="primary">3</Button>
                                    <b style={{color : "skyblue"}}>Next</b>
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

        </div>
    }
}
