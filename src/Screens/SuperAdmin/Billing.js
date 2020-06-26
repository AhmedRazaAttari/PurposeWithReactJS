import React, { Component } from 'react';
import { NavbarComp, ChatSideBar, TabNotification, TextInput, Plans, Features } from '../../component';
import { Sidebar, BottomTab } from '../../component/SuperAdminComponents';
import $ from 'jquery';
import {
    Link
} from "react-router-dom";
import { Search, RemoveRedEye } from '@material-ui/icons';
import { Checkbox, TextField, FormControl, MenuItem, Select } from '@material-ui/core';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import '../../admin.css';

export default class Billing extends Component {

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
                {this.state.ShowSidebar && <Sidebar BillingBackground="rgb(52, 91, 209)" BillingColor="white" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div style={{ padding: 20, paddingTop: 1 }}>
                        <div style={{ width: "100%", background: "white", position: "relative", borderRadius: 10, overflow: "scroll", overflowY: "hidden", overflowX: "scroll" }}>
                            <div className="TimeLine_header" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <b>Billing Method</b>
                                </div>
                            </div>

                            <div style={{ padding: 20 }}>

                                <table id="Billing">
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td><b>Active</b></td>
                                        <td style={{ width: 150 }}><b>View/Edit</b></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td>Free</td>
                                        <td>true</td>
                                        <td style={{ paddingLeft: 20, width: 150 }}><div className="ModalBtn" onClick={() => this.setState({ FreePlan: !this.state.FreePlan })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td>Indivisual Plan</td>
                                        <td>false</td>
                                        <td style={{ paddingLeft: 20, width: 150}}><div className="ModalBtn" onClick={() => this.setState({ IndividualPlan: !this.state.IndividualPlan })}><RemoveRedEye /></div></td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingLeft: 10, paddingRight: 10 }}><input type="checkbox" /></td>
                                        <td>Enterprise Plan</td>
                                        <td>false</td>
                                        <td style={{ paddingLeft: 20, width: 150 }}><div className="ModalBtn" onClick={() => this.setState({ EnterprisePlan: !this.state.EnterprisePlan })}><RemoveRedEye /></div></td>
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
            {this.state.FreePlan && <Modal
                show={this.state.FreePlan}
                onHide={() => this.setState({ FreePlan: false })}
                dialogClassName="modal-90w"
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Free Plan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="ForthSec_Handle">
                        <Plans Heading="Free Plan" price="0" />
                        <Features feature="Community support" />
                        <Features feature="400+ pages" />
                        <Features feature="100+ header variations" />
                        <Button variant="light" style={{ background: "#75d3eb" }}>Get Started</Button><br />
                    </div>

                </Modal.Body>
            </Modal>}
            {this.state.IndividualPlan && <Modal
                show={this.state.IndividualPlan}
                onHide={() => this.setState({ IndividualPlan: false })}
                dialogClassName="modal-90w"
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Individual Plan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="ForthSec_Handle">
                        <Plans Heading="Individual Plan" price="22" />
                        <Features feature="Community support" />
                        <Features feature="400+ pages" />
                        <Features feature="100+ header variations" />
                        <Features feature="20+ home page options" />
                        <Button variant="light" style={{ background: "#75d3eb" }}>Get Started</Button><br />
                    </div>

                </Modal.Body>
            </Modal>}
            {this.state.EnterprisePlan && <Modal
                show={this.state.EnterprisePlan}
                onHide={() => this.setState({ EnterprisePlan: false })}
                dialogClassName="modal-90w"
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Enterprise Plan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="ForthSec_Handle">
                        <Plans Heading="Enterprise Plan" price="99" />
                        <Features feature="24/7 support" />
                        <Features feature="400+ pages" />
                        <Features feature="200+ header variations" />
                        <Features feature="40+ home page options" />
                        <Features feature="E-commerce" />
                        <Button variant="light" style={{ background: "#75d3eb" }}>Get Started</Button><br />
                    </div>

                </Modal.Body>
            </Modal>}
        </div>
    }
}
