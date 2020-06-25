import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen, Editor } from '../component';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import first from '../assets/images/Chats/first.jpg'
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, MoreHoriz, Mail, AddCircle, Search, AssignmentInd, ExitToApp } from '@material-ui/icons';
import code1 from '../assets/images/code-1.jpg';
import code2 from '../assets/images/code-2.jpg';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Checkbox, TextField } from '@material-ui/core'
import { Form, Row, Col, Modal, Button } from 'react-bootstrap';

export default class Notes extends Component {

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
                    <div id="CARDsDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card Label="Spendings" Value="$7.500" Percentage="45" />
                        <Card Label="New tasks" Value="34" Percentage="60" />
                        <Card Label="Finished tasks" Value="68" Percentage="80" />
                        <Card Label="Issues" Value="12" Percentage="20" />
                    </div>
                    <div style={{ padding: 20, position: "relative" }}>

                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header">
                                <b>Notes</b>
                                <Link to="/AddNotes"><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                            </div>
                            <div style={{ padding: 20 }}>
                                <table id="NotesTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td style={{ width: "74%" }}>Task title</td>
                                        <td style={{ width: "26%" }}>View</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{ width: "74%" }}>Create the app's wireframe</td>
                                        <td style={{ width: "26%" }}><div className="ModalBtn" onClick={() => this.openModal()}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{ width: "74%" }}>Create the app's wireframe</td>
                                        <td style={{ width: "74%" }}><div className="ModalBtn" onClick={() => this.openModal()}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{ width: "74%" }}>Create the app's wireframe</td>
                                        <td style={{ width: "26%" }}><div className="ModalBtn" onClick={() => this.openModal()}><RemoveRedEye /></div></td>
                                    </tr>
                                </table>
                            </div>
                            {this.state.open && <Modal
                                show={this.state.open}
                                onHide={() => this.hideModal()}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        Edit task
                                        </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <b>Status</b><br />
                                    <Form.Control as="select" style={{ width: "100%" }}>
                                        <option>Pending</option>
                                        <option>Completed</option>
                                        <option>delayed</option>
                                    </Form.Control>

                                    <br />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <TextField
                                            id="date"
                                            label="Start date"
                                            type="date"
                                            defaultValue="2017-05-24"
                                        />
                                        <TextField
                                            id="date"
                                            label="Remind me on"
                                            type="date"
                                            defaultValue="2017-05-24"
                                        />
                                    </div>

                                    <div style={{ width: "100%", boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03)", border: "1px solid #f7eeee", borderRadius: 5 }}>
                                        <div className="header" style={{ padding: 25, height: 90 }}>
                                            <h6>Check list</h6>
                                            <button style={{ background: "#efe8e8", padding: 4, paddingLeft: 15, paddingRight: 15, borderRadius: 20, border: "none", color: "grey", outline: "none" }} onClick={() => this.setState({ AddTodoItem: !this.state.AddTodoItem })}><AddCircle />&nbsp;Add item</button>
                                        </div>
                                        <div className="TodoContent">
                                            <div>
                                                <span>
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        size="small"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <b>Call waiting</b>
                                                </span>
                                                <span><MoreHoriz /></span>
                                            </div>
                                            <div>
                                                <span>
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        size="small"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <b>Webpixels website redesign</b>
                                                </span>
                                                <span><MoreHoriz /></span>
                                            </div>
                                            <div>
                                                <span>
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        size="small"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <b>Dashboard cards</b>
                                                </span>

                                                <span><MoreHoriz /></span>
                                            </div>
                                            <div>
                                                <span>
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        size="small"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <b>call with dave</b>
                                                </span>

                                                <span><MoreHoriz /></span>
                                            </div>
                                            <div>
                                                <span>
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        size="small"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                    />
                                                    <b>call with dave</b>
                                                </span>

                                                <span><MoreHoriz /></span>
                                            </div>

                                        </div>
                                    </div>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => this.hideModal()}>
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>}

                            {this.state.AddTodoItem && <Modal show={this.state.AddTodoItem} onHide={() => this.setState({ AddTodoItem: false })} style={{ background: "rgba(31,45,61,.3)" }} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add New Todo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Create your task List" />
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => this.setState({ AddTodoItem: false })}>
                                        Ok
                                    </Button>
                                    <Button variant="secondary" onClick={() => this.setState({ AddTodoItem: false })}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>}

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


{/* <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10 }}>
<div className="TimeLine_header">
    <b>Notes</b>
    <div style={{ display: "flex" }}>
        <button id="EditorBtn" style={{ marginLeft: 20, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button>
        <button style={{ marginLeft: 20, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
    </div>
</div>
<br />
<div className="Notes_Content">
    <h2 style={{ fontWeight: "lighter" }}>Getting started with Purpose</h2>
    <p style={{ fontSize: 18, color: "#8492a6" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <br />
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div>
            <img src={first} style={{ width: 45, height: 45, borderRadius: "100%" }} />
            <b style={{ marginLeft: 20, fontWeight: 500 }}>John Sullivan</b> <small style={{ marginLeft: 7, color: "grey" }}>25th October 2018</small>
        </div>

    </div>
    <br />
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ borderRadius: 20, background: "#ccf1f7", color: "#00b8d9", padding: 3, paddingRight: 10, paddingLeft: 10 }}><Code />Web design</div>
        <div style={{ width: 65, borderRadius: 20, background: "#d7f0e5", color: "#36b37e", marginLeft: 20, padding: 3, paddingRight: 10, paddingLeft: 10 }}>Solved</div>
        <div style={{ marginLeft: 20, color: "grey", fontSize: 17 }}><ThumbUpAlt />&nbsp;&nbsp;100</div>
        <div style={{ marginLeft: 20, color: "grey" }}><Forum />&nbsp;&nbsp;20</div>
    </div>
    <br /><br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br />
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
    <br /><br />
    <h6>First thing you need to do</h6>
    <br />
    <img src={code1} style={{ width: "80%" }} />
    <p>Figure one: Type here your description</p>
    <br /><br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br /><br />
    <h6>Second thing you need to do</h6>
    <img src={code2} style={{ width: "80%" }} />
    <p>Figure two: Type here your description</p>
    <br /><br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <br /><br /><br />
    <h6>Did you find this article helpful?</h6>
    <div style={{ width: "97%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
            <button style={{ border: "none", borderRadius: 4, color: "grey" }}><ThumbUpAlt /></button>&nbsp;&nbsp;<button style={{ border: "none", borderRadius: 4, color: "grey" }}><ThumbDownAlt /></button>
        </div>
        <button style={{ border: "none", borderRadius: 20, color: "grey", padding: 3, paddingLeft: 7, paddingRight: 7 }}>Contact Support</button>
    </div>
</div>
</div> */}


{/* <div id="EditorParentDiv">
                        <div className="EditorCustomize">
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
                        </div>
                    </div> */}