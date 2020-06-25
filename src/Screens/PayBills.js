import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen } from '../component';
import { AddCircleOutline, Delete, Edit, RemoveRedEye, PhoneEnabled, Mail, ChevronLeft, ChevronRight, MoreHoriz, AddCircle, AssignmentInd, Search } from '@material-ui/icons';
import $ from 'jquery';
import first from '../assets/images/paybills/first.png';
import second from '../assets/images/paybills/second.png';
import third from '../assets/images/paybills/third.png';
import four from '../assets/images/paybills/four.png';
import { Form, Row, Col, Modal, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

import firstPic from '../assets/images/Chats/first.jpg'
import SecondPic from '../assets/images/Chats/Second.jpg'
import ThirdPic from '../assets/images/Chats/Third.jpg'
import FourthPic from '../assets/images/Chats/Fourth.jpg'
import FifthPic from '../assets/images/Chats/Fifth.jpg'


export default class PayBillPage extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
            open: true,
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
                {this.state.ShowSidebar && <Sidebar PaybillBackground="rgb(60, 77, 233)" />}
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
                                <b>Pay Bills</b>
                                <Link to="/CreatePayBill"><button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#6e00ff", border: "none", borderRadius: 20, outline: "none" }}>Create &nbsp;<AddCircleOutline /></button></Link>
                                <button style={{ marginLeft: 20, padding: 4, paddingLeft: 15, paddingRight: 15, color: "white", background: "#ff5630", border: "none", borderRadius: 20, outline: "none" }}>Delete &nbsp;<Delete /></button>
                            </div>
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
                            <div style={{ padding: 20 }}>
                                <table id="PaybillTable">
                                    <tr className="heading">
                                        <td></td>
                                        <td style={{ width: 305 }}>Project</td>
                                        <td style={{ textAlign: "center", width: 100 }}>Assigned to</td>
                                        <td style={{ textAlign: "center", width: 90 }}>Tasks</td>
                                        <td>Status</td>
                                        <td style={{ width: 115 }}>Price</td>
                                        <td style={{ textAlign: "center", width: 155 }}>To be paid on</td>
                                        <td style={{ textAlign: "center", width: 155 }}>Remainder Date</td>
                                        {/* <td></td>
                                        <td></td> */}
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 15 }}><input type="checkbox" /></td>
                                        <td style={{ width: 305 }}><img src={first} style={{ width: 35, height: 35, borderRadius: "100%" }} />&nbsp;&nbsp;Purpose Website UI</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 90 }}>1</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>on schedule</option>
                                            <option>delayed</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 115, fontSize : 14 }}>$129 USD</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep, 19</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
                                        {/* <td><Edit /></td>
                                        <td><Delete /></td> */}
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ width: 305 }}><img src={second} style={{ width: 35, height: 35, borderRadius: "100%" }} />&nbsp;&nbsp;Website Redesign</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 90 }}>2</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>on schedule</option>
                                            <option>delayed</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 115, fontSize : 14 }}>$49 USD</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep, 19</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
                                        {/* <td><Edit /></td>
                                        <td><Delete /></td> */}
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ width: 305 }}><img src={third} style={{ width: 35, height: 35, borderRadius: "100%" }} />&nbsp;&nbsp;Webpixels Website</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 90 }}>3</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>on schedule</option>
                                            <option>delayed</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 115, fontSize : 14 }}>$65 USD</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep, 19</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
                                        {/* <td><Edit /></td>
                                        <td><Delete /></td> */}
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td style={{ width: 305 }}><img src={four} style={{ width: 35, height: 35, borderRadius: "100%" }} />&nbsp;&nbsp;Purpose Application UI</td>
                                        <td style={{ width: 100, paddingLeft: 22 }}><div className="AssignBtn" onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></div></td>
                                        <td style={{ textAlign: "center", width: 90 }}>4</td>
                                        <td><Form.Control as="select" style={{ width: 110 }}>
                                            <option>Pending</option>
                                            <option>Completed</option>
                                            <option>delayed</option>
                                            <option>on schedule</option>
                                        </Form.Control></td>
                                        <td style={{ textAlign: "center", width: 115, fontSize : 14 }}>$288 USD</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep, 19</td>
                                        <td style={{ textAlign: "center", width: 155 }}>20 Sep 19</td>
                                        {/* <td><Edit /></td>
                                        <td><Delete /></td> */}
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total</td>
                                        <td>$1000 USD</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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
                                    <img src={firstPic} style={{ width: 35, height: 35, borderRadius: "100%" }} />
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
                                    <img src={SecondPic} style={{ width: 35, height: 35, borderRadius: "100%" }} />
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
                                    <img src={ThirdPic} style={{ width: 35, height: 35, borderRadius: "100%" }} />
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
                                    <img src={FourthPic} style={{ width: 35, height: 35, borderRadius: "100%" }} />
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
                                    <img src={FifthPic} style={{ width: 35, height: 35, borderRadius: "100%" }} />
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
        // </div >
    }
}
