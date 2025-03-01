import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Search, Delete, Check, AddCircleOutline, Edit, ChatBubble, Flag, PhoneEnabled, InsertLink, ExitToApp } from '@material-ui/icons';
import '../../admin.css';

export default class EmailTemplate extends Component {

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
                {this.state.ShowSidebar && <Sidebar EmailTempBackground="rgb(52, 91, 209)" EmailTempColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header">
                                <b>Email Template</b>
                                <Link to="/AddEmailTemplate"><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                            </div>

                            <div style={{ padding: 20 }}>
                                <h3>Task Update templates </h3>
                                <table id="Pages">
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td><Link to="/EditEmailTemplate">your task has been about to expire</Link></td>
                                        <td>notify_applicant_applied</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td><Link to="/EditEmailTemplate">your task has been completed</Link></td>
                                        <td>notify_candidate_register</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td><Link to="/EditEmailTemplate">your task has been created sucessfully</Link></td>
                                        <td>notify_applicant_status_change</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td><Link to="/EditEmailTemplate">your Reminder has been created sucessfully</Link></td>
                                        <td>notify_candidate_message</td>
                                        <td>test@example.com</td>
                                    </tr>
                                </table>
                                <br />
                                <h3>Account update templates </h3>
                                <table id="Pages">
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td>Welcome to purpose</td>
                                        <td>notify_applicant_applied</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td>Reset your password</td>
                                        <td>notify_candidate_register</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td>password reset successfull</td>
                                        <td>notify_applicant_status_change</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td>your account has been active</td>
                                        <td>notify_candidate_message</td>
                                        <td>test@example.com</td>
                                    </tr>
                                </table>
                                <br />
                                <h3>Payment update templates </h3>
                                <table id="Pages">
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td>Payment Received</td>
                                        <td>notify_applicant_applied</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td>your account is with low payment</td>
                                        <td>notify_candidate_register</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td></td>
                                        <td>notify_applicant_status_change</td>
                                        <td>test@example.com</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td></td>
                                        <td>notify_candidate_message</td>
                                        <td>test@example.com</td>
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

        </div>
    }
}
