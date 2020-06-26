import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Redirect } from 'react-router'
import { Checkbox, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { Search, Delete, Check, AddCircleOutline, Edit, RemoveRedEye, Flag, PhoneEnabled, InsertLink, ExitToApp } from '@material-ui/icons';
import { Modal, Form, Button } from 'react-bootstrap'
import first from '../../assets/images/Chats/first.jpg';
import Second from '../../assets/images/Chats/Second.jpg';
import Third from '../../assets/images/Chats/Third.jpg';
import Fourth from '../../assets/images/Chats/Fourth.jpg';
import Fifth from '../../assets/images/Chats/Fifth.jpg';
import '../../admin.css';

export default class Feedback extends Component {

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
                {this.state.ShowSidebar && <Sidebar FeedbackBackground="rgb(52, 91, 209)" FeedbackColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <b>Feedback / suggestions</b>
                                </div>
                            </div>

                            <div style={{ padding: 20 }}>
                                <table id="AllUserTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td style={{ width: 170 }}>Name</td>
                                        <td style={{ width: 150 }}>Email</td>
                                        <td style={{ width: 150 }}>Phone</td>
                                        <td>Role</td>
                                        <td>Date</td>
                                        <td style={{ width: 210 }}>Message</td>
                                        <td style={{ width: 80 }}>View</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={first} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b>
                                            </div>
                                        </td>
                                        <td style={{ width: 160 }}>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 160 }}>(240) 330-2007</td>
                                        <td>Designer</td>
                                        <td style={{ width: 115 }}>12-10-2014</td>
                                        <td>Great Platform...</td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn" onClick={() => this.setState({ feedbackReply: true })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Second} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b>
                                            </div>
                                        </td>
                                        <td style={{ width: 160 }}>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 160 }}>(240) 330-2007</td>
                                        <td>Developer</td>
                                        <td style={{ width: 115 }}>12-10-2014</td>
                                        <td>Great Platform...</td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn" onClick={() => this.setState({ feedbackReply: true })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Third} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b>
                                            </div>
                                        </td>
                                        <td style={{ width: 160 }}>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 160 }}>(240) 330-2007</td>
                                        <td>Accountant</td>
                                        <td style={{ width: 115 }}>12-10-2014</td>
                                        <td>Great Platform...</td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn" onClick={() => this.setState({ feedbackReply: true })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Fourth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b>
                                            </div>
                                        </td>
                                        <td style={{ width: 160 }}>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 160 }}>(240) 330-2007</td>
                                        <td>HR</td>
                                        <td style={{ width: 115 }}>12-10-2014</td>
                                        <td>Great Platform...</td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn" onClick={() => this.setState({ feedbackReply: true })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Fifth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b>
                                            </div>
                                        </td>
                                        <td style={{ width: 160 }}>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 160 }}>(240) 330-2007</td>
                                        <td>Manager</td>
                                        <td style={{ width: 115 }}>12-10-2014</td>
                                        <td>Great Platform...</td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn" onClick={() => this.setState({ feedbackReply: true })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Fifth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b>
                                            </div>
                                        </td>
                                        <td style={{ width: 160 }}>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 180 }}>(240) 330-2007</td>
                                        <td>Chairman</td>
                                        <td style={{ width: 115 }}>12-10-2014</td>
                                        <td>Great Platform...</td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn" onClick={() => this.setState({ feedbackReply: true })}><RemoveRedEye /></div></td>
                                    </tr>
                                </table>
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
            {this.state.feedbackReply && <Redirect to="FeedbackReply" push={true} />}

        </div>
    }
}
