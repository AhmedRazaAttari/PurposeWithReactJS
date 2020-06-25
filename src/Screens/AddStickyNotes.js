import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen, Editor } from '../component';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, MoreHoriz, Mail, AddCircle, Search, AssignmentInd, ExitToApp } from '@material-ui/icons';
import { Checkbox, TextField } from '@material-ui/core'
import { Form, Row, Col, Modal, Button } from 'react-bootstrap';
import ReactStickies from 'react-stickies';

export default class StickyNotes extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
            NavExpended: false,
            notes: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    onSave () {
        // Make sure to delete the editorState before saving to backend
        const notes = this.state.notes;
        notes.map(note => {
          delete note.editorState;
        })
        // Make service call to save notes
        // Code goes here...
      }
      onChange (notes) {
        this.setState({ // Update the notes state
          notes
        })
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
                    <div style={{ padding: 20, position: "relative" }}>

                        <div style={{minHeight : 600, width: "100%", background: "white", position: "relative", borderRadius: 10 }}>
                            <br /><br /><br />
                            <div style={{ padding: 20 }}>
                                
                                <div className="StickySteps">
                                    <div>
                                        <div className="StepBox">Back Log</div>
                                    </div>
                                    <div>
                                        <div className="StepBox" style={{ marginLeft: 13 }}>Work In Progress</div>
                                    </div>
                                    <div>
                                        <div className="StepBox" style={{ marginLeft: 15 }}>Done</div>
                                    </div>
                                </div>
                                <br />
                                <ReactStickies
                                    notes={this.state.notes}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br /><br />
                            <Button variant="primary">Cancel</Button>&nbsp;<Button variant="primary">Save</Button>
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




