import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen, Editor } from '../component';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import first from '../assets/images/Chats/first.jpg'
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, MoreHoriz, Mail, AddCircle, Search, AssignmentInd, ExitToApp } from '@material-ui/icons';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Checkbox, TextField } from '@material-ui/core'
import { Form, Row, Col, Modal, Button } from 'react-bootstrap';

export default class StickyNotes extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
            NavExpended: false
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


    async componentDidMount() {

        var _ = this;

        if ($(window).width() <= 1050) {
            _.setState({
                ShowSidebar: false
            })
        }


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

        $("#EditorBtn").click(function (e) {
            $("#EditorParentDiv").css("display", "flex")
            $("body").css("overflow", "hidden")
            $("#EditorParentDiv").css("cursor", "pointer")
            $(".EditorCustomize").css("cursor", "unset")
            e.stopPropagation();
        })

        $("#EditorParentDiv").click(function (e) {
            e.stopPropagation();
            $("#EditorParentDiv").css("display", "none")
            $("body").css("overflow", "initial");
            $("body").css("cursor", "unset")
        })

        $(".EditorCustomize").click(function (e) {
            e.stopPropagation();
            console.log("EditorCustomize CLICKED")
        });

        $(window).on("resize", function () {
            if ($(window).width() < 1050) {

            }
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
                $("#CARDsDiv > div").css({
                    "width": "40%",
                    "flex-wrap": "nowrap",
                    "height": "auto",
                })
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")
            }

            if ($(".AllContent").width() > 954) {

                $("#CARDsDiv > div").css({
                    "width": "40%",
                    "flex-wrap": "nowrap",
                    "height": "auto",
                })
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")

            }
        }

        else {
            $("#CARDsDiv > div").css({
                "width": "",
                "flex-wrap": "wrap",
            })
            $("#RemoveFlex_Media").css("display", "flex")
            $("#RemoveFlex_Media div > div:first-child").first().css("height", "auto")
            $("#RemoveFlex_Media > div > div").css("width", "")
        }
    }

    ONToggleFunc() {
        this.setState({
            NavExpended: !this.state.NavExpended
        })
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
                $("#CARDsDiv > div").css({
                    "width": "40%",
                    "flex-wrap": "nowrap",
                    "height": "auto",
                })
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")
            }

            if ($(".AllContent").width() > 954) {

                $("#CARDsDiv > div").css({
                    "width": "40%",
                    "flex-wrap": "nowrap",
                    "height": "auto",
                })
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")

            }
        }

        else {
            $("#CARDsDiv > div").css({
                "width": "",
                "flex-wrap": "wrap",
            })
            $("#RemoveFlex_Media").css("display", "flex")
            $("#RemoveFlex_Media div > div:first-child").first().css("height", "auto")
            $("#RemoveFlex_Media > div > div").css("width", "")
        }
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
                {this.state.ShowSidebar && <Sidebar NotesBackground="rgb(60, 77, 233)" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    {/* <div id="CARDsDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card Label="Spendings" Value="$7.500" Percentage="45" />
                        <Card Label="New tasks" Value="34" Percentage="60" />
                        <Card Label="Finished tasks" Value="68" Percentage="80" />
                        <Card Label="Issues" Value="12" Percentage="20" />
                    </div> */}
                    <div style={{ padding: 20, position: "relative" }}>

                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header">
                                <b>Notes Name</b>
                            </div>
                            <div style={{ padding: 20, minHeight : 500 }}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Note Name</Form.Label>
                                    <Form.Control type="text" placeholder="Type Note name" />
                                </Form.Group>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onInit={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                                <button style={{ background: "grey", padding: 4, paddingLeft: 15, paddingRight: 15, borderRadius: 20, border: "none", color: "white", float: "right", marginRight: 20, marginTop: 50 }}><AddCircle />&nbsp;Submit</button>
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

        </div>
    }
}
