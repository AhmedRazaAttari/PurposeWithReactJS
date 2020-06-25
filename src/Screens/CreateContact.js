import React, { Component } from 'react';
import { Sidebar, NavbarComp, Card, ChatSideBar, TabNotification, SideBarForSmallScreen } from '../component';
import $ from 'jquery';
import { AddCircleOutline, AddCircle, Delete, Edit, RemoveRedEye, Flag, PhoneEnabled, InsertLink, Search } from '@material-ui/icons';
import { Form, Row, Col } from 'react-bootstrap';

export default class CreateContact extends Component {

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

    render() {
        return <div style={{ width: "100%", height: "100%" }}>
            <div id="For_SetOpacity" style={{ height: "55%", width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100 }}></div>
            <div style={{ display: "flex", width: "100%" }}>
                {this.state.ShowSidebar && <Sidebar ContactBackground="rgb(60, 77, 233)" />}
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
                            <h3>Create Contact Form</h3><br />
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="name" placeholder="Enter your first name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="name" placeholder="+40-777 245 549" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Website Link</Form.Label>
                                <Form.Control type="text" placeholder="https://example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your home address" />
                            </Form.Group>
                            <div style={{ display: "flex", flexWrap: "wrap",  justifyContent : "space-between" }}>
                                <div>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City" />
                                </div>
                                <div style={{marginRight : "50px"}}>

                                    <Form.Label>Country</Form.Label>
                                    <Form.Control placeholder="Country" />
                                </div>
                            </div>

                            <button style={{ background: "grey", padding: 4, paddingLeft: 15, paddingRight: 15, borderRadius: 20, border: "none", color: "white", marginRight: 20, marginTop: 50 }}><AddCircle />&nbsp;Submit</button>

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
