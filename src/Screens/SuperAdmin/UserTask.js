import React, { Component } from 'react';
import { NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen } from '../../component';
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, MoreHoriz, Mail, AddCircle, Search, AssignmentInd, ExitToApp } from '@material-ui/icons';
import $ from 'jquery';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import {
    Link
} from "react-router-dom";
import { Checkbox, TextField } from '@material-ui/core'
import { Form, Row, Col, Modal, Button } from 'react-bootstrap';

import '../../admin.css';


export default class UsersTask extends Component {

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

    openModal = () => {
        this.setState({
            open: true
        });
    };

    hideModal = () => {
        this.setState({
            open: false
        });
    };

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
                {this.state.ShowSidebar && <Sidebar HomeBackground="rgb(52, 91, 209)" HomeColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <b>Users Task</b>
                                    <Link><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                    <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                                </div>
                                <div style={{ margin: 12 }}>
                                    <Button variant="primary">CSV</Button>&nbsp;
                                    <Button variant="primary">Excel</Button>&nbsp;
                                    <Button variant="primary">PDF</Button>&nbsp;
                                    <Button variant="primary">Print</Button>
                                </div>
                            </div>

                            <br />

                            <div style={{ padding: 20 }}>
                                <table id="TaskTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td style={{textAlign: "left"}}>Task title</td>
                                        <td style={{ textAlign: "center", width: 100 }}>Assigned to</td>
                                        <td style={{ textAlign: "center", width: 160 }}>Reminder type</td>
                                        <td style={{ textAlign: "center", width: 110 }}>Status</td>
                                        <td style={{ textAlign: "center", width: 100 }}>Percentage</td>
                                        <td style={{ textAlign: "center", width: 155 }}>Remainder Date</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{textAlign: "left"}}>Create the app's wireframe</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 160 }}><Mail /><PhoneEnabled /></td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>delayed</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 100 }}> 50%</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{textAlign: "left"}}>Create the app's wireframe</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 160 }}><Mail /><PhoneEnabled /></td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>delayed</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 100 }}> 50%</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{textAlign: "left"}}>Create the app's wireframe</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 160 }}><Mail /><PhoneEnabled /></td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>delayed</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 100 }}> 50%</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
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
                {this.state.ShowChatSidebar && <ChatSideBar HideSidebar={() => this.hideChatSidebar()} />}
                {this.state.Shownotification && <TabNotification />}

            </div>
        </div>
    }
}