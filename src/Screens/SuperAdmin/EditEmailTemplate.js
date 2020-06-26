import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Search, LibraryBooks } from '@material-ui/icons';
import '../../admin.css';
import { Checkbox, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';

export default class EditEmailTemplate extends Component {

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
                {this.state.ShowSidebar && <Sidebar PagesBackground="rgb(52, 91, 209)" PagesColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, display: "flex", flexDirection: "column", padding: 20 }}>
                            <h3>Edit Email Template</h3><br />

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>Template Name</Form.Label>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ width: "80%" }}>
                                    <Form.Control placeholder="your task has been about to expire" />
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>Activity</Form.Label>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "left", width: "80%" }}>
                                    <Checkbox
                                        size="small"
                                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                                    />
                                    <span>Enable this email Notification</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>Sender Name</Form.Label>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ width: "80%" }}>
                                    <Form.Control type="name" />
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>Sender Email</Form.Label>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ width: "80%" }}>
                                    <Form.Control type="email" />
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>BCC</Form.Label>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ width: "80%" }}>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>Email title</Form.Label>
                                <Form.Group controlId="exampleForm.ControlInput1" style={{ width: "80%" }}>
                                    <Form.Control type="email" />
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                                <Form.Label>Email format</Form.Label>
                                <Form.Group controlId="exampleForm.ControlSelect1" style={{ width: "80%" }}>
                                    <Form.Control as="select">
                                        <option>Plain Text</option>
                                        <option>other</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <Form.Label>Body Text</Form.Label>
                                <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
                                    <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
                                        <button style={{ border: "2px solid skyblue", borderRadius: 15, background: "white", color: "blueviolet" }}><LibraryBooks />&nbsp; Insert Variable</button>
                                        <button style={{ border: "2px solid skyblue", borderRadius: 15, marginLeft: 10, background: "white", color: "blueviolet" }}><Search />&nbsp; Preview</button>
                                    </div>
                                    <Form.Control as="textarea" rows="6" />
                                </div>
                            </div>
                            <br />
                            <div style={{ display: "flex", alignSelf: "flex-end" }}>
                                <Button variant="primary">Save Changes</Button>&nbsp;
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
