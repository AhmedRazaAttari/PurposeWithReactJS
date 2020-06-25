import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen } from '../component';
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, MoreHoriz, Mail, AddCircle, Search, AssignmentInd, ExitToApp } from '@material-ui/icons';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Checkbox, TextField } from '@material-ui/core'
import { Form, Row, Col, Modal, Button } from 'react-bootstrap';
import LibraryModal from 'react-modal';

import first from '../assets/images/Chats/first.jpg'
import Second from '../assets/images/Chats/Second.jpg'
import Third from '../assets/images/Chats/Third.jpg'
import Fourth from '../assets/images/Chats/Fourth.jpg'
import Fifth from '../assets/images/Chats/Fifth.jpg'

export default class AllTasks extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
            open: false
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
        const customStyles = {
            content: {
                right: 'auto',
                bottom: 'auto',
                overflow: "scroll"
            }
        };
        return <div style={{ width: "100%", height: "100%" }}>
            <div id="For_SetOpacity" style={{ height: "55%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100 }}></div>
            <div style={{ display: "flex", width: "100%" }}>
                {this.state.ShowSidebar && <Sidebar TodoBackground="rgb(60, 77, 233)" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div id="CARDsDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card Label="Spendings" Value="$7.500" Percentage="45" />
                        <Card Label="New tasks" Value="34" Percentage="60" />
                        <Card Label="Finished tasks" Value="68" Percentage="80" />
                        <Card Label="Issues" Value="12" Percentage="20" />
                    </div>
                    <div style={{ padding: 20, position: "relative" }}>
                        <div>
                            <b style={{ fontSize: 28, color: "white" }}>Tasks</b><b style={{ fontSize: 24, fontWeight: "lighter", color: "white", marginLeft: 10 }}>9</b><b style={{ fontSize: 18, fontWeight: 300, color: "white", marginLeft: 10 }}>New tasks</b>
                        </div>
                        <br />
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header">
                                <b>All tasks</b>
                                <Link to="/AddTask"><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                            </div>
                            <br />
                            <div style={{ display: "flex", justifyContent : "space-between", alignItems : "center"}}>
                                
                                <div style={{ display: "flex" }}>
                                    <div>
                                        <b style={{ marginLeft: 20, color: "grey" }}>Filter</b>
                                        <Form.Control as="select" style={{ width: 140, marginLeft: 20 }}>
                                            <option>All</option>
                                            <option>Personal</option>
                                            <option>Work</option>
                                            <option>Friends</option>
                                            <option>Other</option>
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
                                </div>
                                <div>
                                    <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 5, outline: "none" }}><RemoveRedEye />&nbsp;Today</button>
                                    <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 5, outline: "none" }}><Flag />&nbsp;Tomorrow</button><br />
                                </div>

                            </div>
                            <div style={{ padding: 20 }}>
                                <table id="TaskTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td style={{ width: "20%" }}>Task title</td>
                                        <td style={{ textAlign: "center", width: 100 }}>Assigned to</td>
                                        <td style={{ textAlign: "center", width: 100 }}>View/Edit</td>
                                        <td style={{ textAlign: "center", width: 160 }}>Reminder type</td>
                                        <td style={{ textAlign: "center", width: 110 }}>Status</td>
                                        <td style={{ textAlign: "center", width: 100 }}>Percentage</td>
                                        <td style={{ textAlign: "center", width: 155 }}>Remainder Date</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{ width: "20%" }}>Create the app's wireframe</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="ModalBtn" onClick={() => this.openModal()}><RemoveRedEye /></div></td>
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
                                        <td style={{ width: "20%" }}>Create the app's wireframe</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="ModalBtn" onClick={() => this.openModal()}><RemoveRedEye /></div></td>
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
                                        <td style={{ width: "20%" }}>Create the app's wireframe</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="ModalBtn" onClick={() => this.openModal()}><RemoveRedEye /></div></td>
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
            {this.state.UserModal && <Modal show={this.state.UserModal} onHide={() => this.setState({ UserModal: false })} className="UserModal" centered>
                <Modal.Header closeButton>
                    <Modal.Title>User's List</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "2px" }}>
                    <table style={{ width: "100%" }}>
                        <tr className="heading">
                            <td></td>
                            <td>Name</td>
                            <td>User Type</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                            <td style={{ display: "flex", alignItems: "center", marginTop: 8, fontSize: 13, width: 155 }}>
                                <div>
                                    <img src={first} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <b>John Sullivan</b><br />Working remotely
                                        </div>
                            </td>
                            <td><Form.Control as="select" style={{ width: 110 }}>
                                <option>Family member</option>
                                <option>Tenant</option>
                                <option>work</option>
                                <option>friend</option>
                            </Form.Control></td>
                            <td><Link to="/Users"><Button variant="primary">View</Button></Link></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                            <td style={{ display: "flex", alignItems: "center", marginTop: 8, fontSize: 13, width: 155 }}>
                                <div>
                                    <img src={Second} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <b>John Sullivan</b><br />Working remotely
                                        </div>
                            </td>
                            <td><Form.Control as="select" style={{ width: 110 }}>
                                <option>Family member</option>
                                <option>Tenant</option>
                                <option>work</option>
                                <option>friend</option>
                            </Form.Control></td>
                            <td><Link to="/Users"><Button variant="primary">View</Button></Link></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                            <td style={{ display: "flex", alignItems: "center", marginTop: 8, fontSize: 13, width: 155 }}>
                                <div>
                                    <img src={Third} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <b>John Sullivan</b><br />Working remotely
                                        </div>
                            </td>
                            <td><Form.Control as="select" style={{ width: 110 }}>
                                <option>Family member</option>
                                <option>Tenant</option>
                                <option>work</option>
                                <option>friend</option>
                            </Form.Control></td>
                            <td><Link to="/Users"><Button variant="primary">View</Button></Link></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                            <td style={{ display: "flex", alignItems: "center", marginTop: 8, fontSize: 13, width: 155 }}>
                                <div>
                                    <img src={Fourth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <b>John Sullivan</b><br />Working remotely
                                        </div>
                            </td>
                            <td><Form.Control as="select" style={{ width: 110 }}>
                                <option>Family member</option>
                                <option>Tenant</option>
                                <option>work</option>
                                <option>friend</option>
                            </Form.Control></td>
                            <td><Link to="/Users"><Button variant="primary">View</Button></Link></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                            <td style={{ display: "flex", alignItems: "center", marginTop: 8, fontSize: 13, width: 155 }}>
                                <div>
                                    <img src={Fifth} style={{ width: 35, height: 35, borderRadius: "100%" }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <b>John Sullivan</b><br />Working remotely
                                        </div>
                            </td>
                            <td><Form.Control as="select" style={{ width: 110 }}>
                                <option>Family member</option>
                                <option>Tenant</option>
                                <option>work</option>
                                <option>friend</option>
                            </Form.Control></td>
                            <td><Link to="/Users"><Button variant="primary">View</Button></Link></td>
                        </tr>
                    </table>
                </Modal.Body>
            </Modal>}
        </div >
    }
}
