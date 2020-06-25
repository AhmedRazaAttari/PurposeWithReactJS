import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Search, Delete, Check, AddCircleOutline, Edit, ChatBubble, Flag, PhoneEnabled, InsertLink, ExitToApp } from '@material-ui/icons';
import '../../admin.css';

export default class Pages extends Component {

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
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header">
                                <b>Pages</b>
                                <Link><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                            </div>

                            <div style={{ padding: 20 }}>
                                <table id="Pages">
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ color: "skyblue"}}>Title</td>
                                        <td style={{ width: 120 }}><b>Status</b></td>
                                        <td style={{ width: 120 }}>Author</td>
                                        <td style={{ width: 130, textAlign : "center" }}><ChatBubble size="small"/></td>
                                        <td style={{ width: 120, color: "skyblue" }}>Date</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td><b style={{ color: "skyblue" }}>Privacy Policy</b> -- <b>Draft, Privacy Policy Page</b><br />
                                            <Link style={{ color: "skyblue" }} to="/EditPages">Edit</Link>&nbsp;|&nbsp;<Link style={{ color: "skyblue" }}>Quick Edit</Link>&nbsp;|&nbsp;<Link style={{ color: "brown" }}>Trash</Link>&nbsp;|&nbsp;<Link style={{ color: "skyblue" }}>Preview</Link>
                                        </td>
                                        <td style={{ width: 120 }}>Published</td>
                                        <td style={{ width: 120, color: "skyblue" }}>opensourcecms</td>
                                        <td style={{ width: 130, textAlign : "center" }}>---</td>
                                        <td style={{ width: 120 }}><b>Last Modified</b><br />2018/10/02</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ color: "skyblue" }}><b>Terms and conditions</b></td>
                                        <td style={{ width: 120 }}>Draft</td>
                                        <td style={{ width: 120, color: "skyblue" }}>opensourcecms</td>
                                        <td style={{ width: 130, textAlign : "center" }}>---</td>
                                        <td style={{ width: 120 }}><b>Published</b><br />2018/10/02</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 5, paddingRight: 5 }}><input type="checkbox" /></td>
                                        <td style={{ color: "skyblue" }}>Title</td>
                                        <td style={{ width: 120 }}></td>
                                        <td style={{ width: 120 }}>Author</td>
                                        <td style={{ width: 130, textAlign : "center" }}><ChatBubble size="small"/></td>
                                        <td style={{ width: 120, color: "skyblue" }}>Date</td>
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
