import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Checkbox, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { Search, Delete, Check, AddCircleOutline, Edit, RemoveRedEye, Flag, PhoneEnabled, InsertLink, ExitToApp } from '@material-ui/icons';
import { Modal, Form, Button } from 'react-bootstrap'
import '../../admin.css';

export default class AdminDashboard extends Component {

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
                {this.state.ShowSidebar && <Sidebar HomeBackground="rgb(52, 91, 209)" HomeColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <b>MANAGE USERS</b>
                                    <Link><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                    <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                                </div>
                                <div style={{margin : 12}}>
                                    <Button variant="primary">CSV</Button>&nbsp;
                                    <Button variant="primary">Excel</Button>&nbsp;
                                    <Button variant="primary">PDF</Button>&nbsp;
                                    <Button variant="primary">Print</Button>
                                </div>
                            </div>

                            <br />
                            <div style={{ display: "flex" }}>
                                <div>
                                    <b style={{ marginLeft: 20, color: "grey" }}>Filter</b>
                                    <Form.Control as="select" style={{ width: 140, marginLeft: 20 }}>
                                        <option>Free</option>
                                        <option>Paid</option>
                                        <option>Active</option>
                                        <option>Blocked</option>
                                    </Form.Control>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div>
                                        <b style={{ marginLeft: 20, color: "grey" }}>Search</b>
                                        <Form.Group controlId="exampleForm.ControlInput1" style={{ width: 160, marginLeft: 20 }}>
                                            <Form.Control type="text" placeholder="Search..." />
                                        </Form.Group>
                                    </div>
                                    <button style={{ marginTop: 10, marginLeft: 10, padding: 4, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 5, outline: "none", height: 40 }}><Search /></button>
                                </div>
                                <div style={{ height: 80, width: 1, background: "rgb(241, 237, 237)", marginLeft: 15 }}></div>
                                <div>
                                    <b style={{ marginLeft: 20, color: "grey" }}>Due from</b><br />
                                    <TextField
                                        id="datetime-local"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                        style={{ width: 140, marginLeft: 20 }}
                                    />
                                </div>
                                <div>
                                    <b style={{ marginLeft: 20, color: "grey" }}>To</b><br />
                                    <TextField
                                        id="datetime-local"
                                        type="datetime-local"
                                        defaultValue="2017-05-24T10:30"
                                        style={{ width: 140, marginLeft: 20 }}
                                    />
                                </div>
                            </div>
                            <div style={{ padding: 20 }}>
                                <table id="UserTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td style={{ width: 80 }}>Setting</td>
                                        <td style={{ width: 135 }}>Date <b style={{ color: "grey" }}>Paid on</b></td>
                                        <td style={{ width: 90 }}>Invoice</td>
                                        <td style={{ width: 150 }}>Order No</td>
                                        <td style={{ width: 160 }}>Customer Name</td>
                                        <td style={{ width: 135 }}>Due</td>
                                        <td style={{ width: 110 }}>Account type</td>
                                        <td style={{ width: 125 }}>Amount</td>
                                        <td style={{ width: 130 }}>Status</td>
                                    </tr>
                                    <tr style={{ background: "rgb(236, 232, 232)" }}>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td >17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-41</td>
                                        <td>A0N0-123456401</td>
                                        <td>Nirav Joshi</td>
                                        <td>2011/04/25</td>
                                        <td>Gold</td>
                                        <td>$320,800</td>
                                        <td>Paid</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-42</td>
                                        <td>A0N0-123456401</td>
                                        <td>Sunil Joshi</td>
                                        <td>2011/04/25</td>
                                        <td>Silver</td>
                                        <td>$320,800</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr style={{ background: "rgb(236, 232, 232)" }}>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-43</td>
                                        <td>A0N0-123456401</td>
                                        <td>Vishal Bhatt</td>
                                        <td>2011/04/25</td>
                                        <td>Gold</td>
                                        <td>$320,800</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-44</td>
                                        <td>A0N0-123456401</td>
                                        <td>Nirav Joshi</td>
                                        <td>2011/04/25</td>
                                        <td>Silver</td>
                                        <td>$320,800</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr style={{ background: "rgb(236, 232, 232)" }}>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-45</td>
                                        <td>A0N0-123456401</td>
                                        <td>Uday Navapara</td>
                                        <td>2011/04/25</td>
                                        <td>Gold</td>
                                        <td>$320,800</td>
                                        <td>Paid</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-42</td>
                                        <td>A0N0-123456401</td>
                                        <td>Sunil Joshi</td>
                                        <td>2011/04/25</td>
                                        <td>Silver</td>
                                        <td>$320,800</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr style={{ background: "rgb(236, 232, 232)" }}>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-43</td>
                                        <td>A0N0-123456401</td>
                                        <td>Vishal Bhatt</td>
                                        <td>2011/04/25</td>
                                        <td>Gold</td>
                                        <td>$320,800</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-44</td>
                                        <td>A0N0-123456401</td>
                                        <td>Nirav Joshi</td>
                                        <td>2011/04/25</td>
                                        <td>Silver</td>
                                        <td>$320,800</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr style={{ background: "rgb(236, 232, 232)" }}>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ width: 80, paddingLeft: 20 }}><div className="ModalBtn"><RemoveRedEye /></div></td>
                                        <td>17-March-2017</td>
                                        <td style={{ fontSize: 14, width: 90 }}>Wp-45</td>
                                        <td>A0N0-123456401</td>
                                        <td>Uday Navapara</td>
                                        <td>2011/04/25</td>
                                        <td>Gold</td>
                                        <td>$320,800</td>
                                        <td>Paid</td>
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