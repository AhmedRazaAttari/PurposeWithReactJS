import React, { Component } from 'react';
import { AddCircleOutline, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, InsertLink, Search, AssignmentInd, AddCircle } from '@material-ui/icons';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen } from '../component';
import $ from 'jquery';
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
import first from '../assets/images/Chats/first.jpg'
import Second from '../assets/images/Chats/Second.jpg'
import Third from '../assets/images/Chats/Third.jpg'
import Fourth from '../assets/images/Chats/Fourth.jpg'
import Fifth from '../assets/images/Chats/Fifth.jpg'
var ReminderArr = [];

export default class BirthdayForm extends Component {

    constructor() {
        super();

        this.state = {
            ShowSidebar: true,
            ShowReminder: true,
            ReminderList: [],
            selectedTime: null,
            selectedType: null,
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

    GetSelectedVal() {

        var selectedTime = $("#RemindTime").find("option:selected").text();
        var selectedType = $("#RemindType").find("option:selected").text();
        // console.log(selectedType)
        // console.log(selectedText)

        this.setState({
            selectedTime: selectedTime,
            selectedType: selectedType
        })
    }

    AddReminder() {
        const { selectedTime, selectedType } = this.state;
        if (selectedTime !== null && selectedType !== null) {
            var Reminder = { selectedTime, selectedType }
            ReminderArr.push(Reminder)
            this.setState({
                ReminderList: ReminderArr
            })
        }
    }

    DeleteReminder(data, index) {
        ReminderArr.splice(index, 1)
        this.setState({
            ReminderList: ReminderArr
        })
    }

    render() {
        console.log(this.state)
        return <div style={{ width: "100%", height: "100%" }}>
            <div id="For_SetOpacity" style={{ height: "55%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100 }}></div>
            <div style={{ display: "flex", width: "100%" }}>
                {this.state.ShowSidebar && <Sidebar BirthBackground="rgb(60, 77, 233)" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    {/* <div id="CARDsDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card Label="Spendings" Value="$7.500" Percentage="45" />
                        <Card Label="New tasks" Value="34" Percentage="60" />
                        <Card Label="Finished tasks" Value="68" Percentage="80" />
                        <Card Label="Issues" Value="12" Percentage="20" />
                    </div> */}
                    <div style={{ padding: 20 }}>
                        <div id="AllForms" style={{ margin: '0 auto', background: "white", position: "relative", borderRadius: 10, padding: 20 }}>
                            <h2>Birthday / Anniversary </h2>
                            <p>Select from the drpdowns below and click "Save" to add your event.<br /> (Fields may change depending on your event)</p>
                            <br />
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Type of Event</Form.Label>
                                    <Form.Control as="select">
                                        <option>Birthday</option>
                                        <option>Anniversary</option>
                                        <option>Engagement</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            <b>Birth Date</b><br />
                            <TextField
                                id="date"
                                type="date"
                                style={{ width: "100%" }}
                                defaultValue="2017-05-24"
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br /><br />
                            <b>Time</b><br />
                            <TextField
                                id="time"
                                type="time"
                                style={{ width: "100%" }}
                                defaultValue="07:30"
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                            <br /><br />
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <br />
                            <FormLabel component="legend">Whom to send</FormLabel>
                            <RadioGroup aria-label="Send" name="Send">
                                <div style={{ display: "flex" }}>
                                    <FormControlLabel value="Someone else" control={<Radio />} label="Someone else" />
                                    <FormControlLabel value="Me" control={<Radio />} label="Me" />
                                </div>
                            </RadioGroup>
                            <br />
                            <div style={{ display: "flex", flexWrap: "wrap",  justifyContent : "space-between" }}>
                                <div>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </div>
                                <div style={{marginRight : "50px"}}>

                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </div>
                            </div>
                            <br />
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent : "space-between" }}>
                                <div>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </div>
                                <div style={{marginRight : "50px"}}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1">
                                        <div style={{ display: "flex" }}>
                                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                        </div>
                                    </RadioGroup>
                                </div>
                            </div>
                            <br />
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Relationship</Form.Label>
                                    <Form.Control as="select">
                                        <option>Relative</option>
                                        <option>Sister</option>
                                        <option>Friend</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            {this.state.ReminderList.length ? <div>
                                <br />
                                <b>Your Reminders</b>
                                {this.state.ReminderList.map((items, i) => {
                                    return <div key={i} style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                                        <Form.Group>
                                            <Form.Label>Remind In</Form.Label>
                                            <Form.Control as="select" disabled>
                                                <option>{items.selectedTime}</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <br />
                                        <Form.Group>
                                            <Form.Label>Remind by</Form.Label>
                                            <Form.Control as="select" disabled>
                                                <option>{items.selectedType}</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <button onClick={() => this.DeleteReminder(items, i)} style={{ outline: "none", marginTop: 30, height: 40, padding: 3, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 20, background: "#e4e7ed" }}>Delete</button>
                                    </div>
                                })}
                            </div> : null}
                            <br />
                            <b>Create Reminder<Checkbox onChange={() => this.setState({ ShowReminder: !this.state.ShowReminder })} defaultChecked color="primary" size="small" /></b>
                            <br />
                            {this.state.ShowReminder && <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                                <Form.Group>
                                    <Form.Label>Remind In</Form.Label>
                                    <Form.Control as="select" id="RemindTime" onChange={() => this.GetSelectedVal()}>
                                        <option>10 Minutes</option>
                                        <option>15 Minutes</option>
                                        <option>30 Minutes</option>
                                        <option>45 Minutes</option>
                                        <option>1 hour</option>
                                        <option>1.5 hour</option>
                                        <option>2 hour</option>
                                        <option>3 hour</option>
                                        <option>4 hour</option>
                                        <option>5 hour</option>
                                        <option>6 hour</option>
                                        <option>7 hour</option>
                                        <option>8 hour</option>
                                        <option>9 hour</option>
                                        <option>10 hour</option>
                                        <option>11 hour</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group style={{ marginLeft: 10 }}>
                                    <Form.Label>Remind by</Form.Label>
                                    <Form.Control as="select" id="RemindType" onChange={() => this.GetSelectedVal()}>
                                        <option>Remind me via email</option>
                                        <option>me via SMS</option>
                                        <option>Remind me via alexa</option>
                                        <option>Remind me via Whatsup</option>
                                    </Form.Control>
                                </Form.Group>
                                {/* <div className="AssignBtn" onClick={() => this.openModal()}><AssignmentInd /></div> */}
                                <button style={{ outline: "none", marginLeft: 10, marginTop: 30, height: 40, width: 40, padding: 3, border: "none", borderRadius: "100%", background: "goldenrod", color: "white" }} onClick={() => this.setState({ UserModal: !this.state.UserModal })}><AssignmentInd /></button>
                                <button disabled={this.state.selectedTime && this.state.selectedType ? null : "disabled"} style={{ outline: "none", marginTop: 30, height: 40, padding: 3, paddingLeft: 15, paddingRight: 15, border: "none", borderRadius: 20, background: "#e4e7ed" }} onClick={() => this.AddReminder()}>Add</button>

                            </div>}
                            <button style={{ background: "grey", padding: 4, paddingLeft: 15, paddingRight: 15, borderRadius: 20, border: "none", color: "white", marginRight: 20, marginTop: 50 }}><AddCircle />&nbsp;Submit</button>

                        </div>
                    </div>
                    <SideBarForSmallScreen />
                </div >
            </div >

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
            {
                this.state.UserModal && <Modal show={this.state.UserModal} onHide={() => this.setState({ UserModal: false })} className="UserModal" centered>
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
                </Modal>
            }
        </div >
    }
}
