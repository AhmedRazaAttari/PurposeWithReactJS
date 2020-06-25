import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen } from '../component';
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, InsertLink, ExitToApp, Search } from '@material-ui/icons';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import first from '../assets/images/Chats/first.jpg'
import Second from '../assets/images/Chats/Second.jpg'
import Third from '../assets/images/Chats/Third.jpg'
import Fourth from '../assets/images/Chats/Fourth.jpg'
import Fifth from '../assets/images/Chats/Fifth.jpg'
import { Form } from 'react-bootstrap';

export default class Users extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true
        }
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

                $("#CARDsDiv > div:first-child").css({
                    display: "none"
                })

            }

            if ($(".AllContent").width() > 954) {

                $("#CARDsDiv > div:first-child").css({
                    display: "none"
                })

            }
        }

        else {
            $("#CARDsDiv > div:first-child").css({
                display: ""
            })
        }
    }

    componentDidMount() {

        $(".SearchBarDiv").click(function (e) {
            e.stopPropagation();
            $(".SearchBarDiv").css("display", "none");
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

                $("#CARDsDiv > div:first-child").css({
                    display: "none"
                })

            }

            if ($(".AllContent").width() > 954) {

                $("#CARDsDiv > div:first-child").css({
                    display: "none"
                })

            }
        }

        else {
            $("#CARDsDiv > div:first-child").css({
                display: ""
            })
        }
    }

    ONToggleFunc() {
        this.setState({
            NavExpended: !this.state.NavExpended
        })
    }

    OnCollapseNav() {
        // var heightWithoutScrollbar = window.innerHeight;
        // if ($("body").css("overflow", "initial")) {
        //     $("body").css("overflow", "hidden")
        //     $("#NavbarCustomize").css("min-height", heightWithoutScrollbar)
        // }
    }

    OnUnCollapseNav() {
        // if ($("body").css("overflow", "hidden")) {
        //     $("body").css("overflow", "initial")
        //     $("#NavbarCustomize").css("min-height", "auto")
        // }
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
                {this.state.ShowSidebar && <Sidebar UserBackground="rgb(60, 77, 233)" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div id="CARDsDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card Label="Spendings" Value="$7.500" Percentage="45" />
                        <Card Label="New tasks" Value="34" Percentage="60" />
                        <Card Label="Finished tasks" Value="68" Percentage="80" />
                        <Card Label="Issues" Value="12" Percentage="20" />
                    </div>
                    <div style={{ padding: 20 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header">
                                <b>Users</b>
                                <Link to="/CreateUser"><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                            </div>

                            <div style={{ padding: 20 }}>
                                <table id="UserTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Sms No.</td>
                                        <td>Watsapp No.</td>
                                        <td>User Type</td>
                                        <td>alexa api</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={first} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b><br />Working remotely
                                        </div>
                                        </td>
                                        <td>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Family member</option>
                                            <option>Tenant</option>
                                            <option>work</option>
                                            <option>friend</option>
                                        </Form.Control></td>
                                        <td style={{ width: 56 }}>12345</td>
                                        <td><ExitToApp /></td>
                                        <td><Edit /></td>
                                        <td><Delete /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Second} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b><br />Working remotely
                                        </div>
                                        </td>
                                        <td>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Family member</option>
                                            <option>Tenant</option>
                                            <option>work</option>
                                            <option>friend</option>
                                        </Form.Control></td>
                                        <td style={{ width: 56 }}>12345</td>
                                        <td><ExitToApp /></td>
                                        <td><Edit /></td>
                                        <td><Delete /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Third} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b><br />Working remotely
                                        </div>
                                        </td>
                                        <td>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Family member</option>
                                            <option>Tenant</option>
                                            <option>work</option>
                                            <option>friend</option>
                                        </Form.Control></td>
                                        <td style={{ width: 56 }}>12345</td>
                                        <td><ExitToApp /></td>
                                        <td><Edit /></td>
                                        <td><Delete /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Fourth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b><br />Working remotely
                                        </div>
                                        </td>
                                        <td>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Family member</option>
                                            <option>Tenant</option>
                                            <option>work</option>
                                            <option>friend</option>
                                        </Form.Control></td>
                                        <td style={{ width: 56 }}>12345</td>
                                        <td><ExitToApp /></td>
                                        <td><Edit /></td>
                                        <td><Delete /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ display: "flex", alignItems: "center", marginTop: 8, width: 200 }}>
                                            <div>
                                                <img src={Fifth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                            </div>
                                            <div style={{ marginLeft: 10 }}>
                                                <b>John Sullivan</b><br />Working remotely
                                        </div>
                                        </td>
                                        <td>name@example.com</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td style={{ fontSize: 14, width: 130 }}><PhoneEnabled />&nbsp; (240) 330-2007</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Family member</option>
                                            <option>Tenant</option>
                                            <option>work</option>
                                            <option>friend</option>
                                        </Form.Control></td>
                                        <td style={{ width: 56 }}>12345</td>
                                        <td><ExitToApp /></td>
                                        <td><Edit /></td>
                                        <td><Delete /></td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                    </div>

                    <SideBarForSmallScreen />
                </div>

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
            {this.state.CollapseNavbar ? this.OnCollapseNav() : this.OnUnCollapseNav()}
        </div >
    }
}
