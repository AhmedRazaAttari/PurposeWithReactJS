import React, { Component } from 'react';
import { NavbarComp, Card, TimeLine, TodoList, Notification, EmailSent, Calender, TabNotification, Sidebar, ChatSideBar, SearchBar, SideBarForSmallScreen } from '../component';
import $ from 'jquery';
import { Modal } from 'react-bootstrap'
import { Search } from '@material-ui/icons';
import querySearch from "query-string";
import firebase from '../config/firebaseConfig';

export default class Dashboard extends Component {


    constructor() {
        super();

        this.state = {
            NavExpended: false,
            ShowSidebar: true,
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
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")
                $("#RemoveFlex_Media div:first-child").first().children().last().find(".react-calendar").css("width", "100%")
            }

            if ($(".AllContent").width() > 954) {

                $("#CARDsDiv > div:first-child").css({
                    display: "none"
                })
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")
                $("#RemoveFlex_Media div:first-child").first().children().last().find(".react-calendar").css("width", "100%")
            }
        }

        else {

            $("#CARDsDiv > div:first-child").css({
                display: ""
            })
            $("#RemoveFlex_Media").css("display", "flex")
            $("#RemoveFlex_Media div > div:first-child").first().css("height", "auto")
            $("#RemoveFlex_Media > div > div").css("width", "")

        }

    }

    componentDidMount() {

        if (this.props.location.search !== null && this.props.location.search !== undefined && this.props.location.search !== "") {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    fetch("https://purposewebapp.herokuapp.com/user/getProfile", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            Email: user.email,
                        })
                    }).then(r => r.json().then(data => {
                        if (!r.ok) {
                        }
                        else {
                            fetch("https://purposewebapp.herokuapp.com/user/VerifyEmail", {
                                method: "POST",
                                headers: {
                                    "content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    _id: data.result._id
                                })
                            }).then((success) => {
                                console.log(success)
                                localStorage.setItem("EmailVerified", true)
                            })
                        }
                    }))
                }
            })
        }
        console.log("this.props.location.search ===>>", this.props.location.search)
        // var query = querySearch(this.props.location.search);
        // console.log("QUERY ===>", query)

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
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")
                $("#RemoveFlex_Media div:first-child").first().children().last().find(".react-calendar").css("width", "100%")
            }

            if ($(".AllContent").width() > 954) {

                $("#CARDsDiv > div:first-child").css({
                    display: "none"
                })
                $("#RemoveFlex_Media").css("display", "block")
                $("#RemoveFlex_Media > div > div").css("width", "100%")

                $("#RemoveFlex_Media div > div:first-child").first().find(".Timeline_Content > div > div").css("width", "100%")
                $("#RemoveFlex_Media div:first-child").first().children().last().find(".react-calendar").css("width", "100%")
            }
        }

        else {
            // $("#CARDsDiv > div").css({
            //     "width": "",
            //     "flex-wrap": "wrap",
            // })
            $("#CARDsDiv > div:first-child").css({
                display: ""
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
        console.log(this.state.CollapseNavbar)
        console.log(localStorage.getItem("user"))
        console.log(localStorage.getItem("_id"))

        return <div style={{ width: "100%", height: "100%" }}>
            <div id="For_SetOpacity" style={{ height: 400, width: "100%", background: "rgb(60, 77, 235)", position: "absolute", borderBottomLeftRadius: 100 }}></div>
            <div style={{ display: "flex", width: "100%" }}>
                {this.state.ShowSidebar && <Sidebar HomeBackground="rgb(60, 77, 233)" />}
                <div id="For_SetOpacity" className="AllContent" style={{ width: "100%" }}>
                    <NavbarComp ONToggle={() => this.ONToggleFunc()} ONEXPAND={this.state.NavExpended} Notificate={() => this.setState({ Shownotification: !this.state.Shownotification })} SidebarToggle={() => this.ShowingSideBar()} ChatBar={() => this.ChatSidebarFunc()} SearchBar={() => this.ShowSearchBar()} ToggleBTN={() => this.setState({ CollapseNavbar: !this.state.CollapseNavbar })} />
                    <div id="CARDsDiv" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card Label="Spendings" Value="$7.500" Percentage="45" />
                        <Card Label="New tasks" Value="34" Percentage="60" />
                        <Card Label="Finished tasks" Value="68" Percentage="80" />
                        <Card Label="Issues" Value="12" Percentage="20" />
                    </div>
                    <div id="RemoveFlex_Media">
                        <div>
                            <TimeLine />
                            <Calender />
                        </div>
                        <div>
                            <TodoList />
                            <EmailSent />
                        </div>
                        <div>
                            <Notification />
                            <EmailSent />
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



// if ($(window).width() <= 1275) {

            // }
            // if ($(window).width() <= 1222) {
            //     $("#CARDsDiv > div").css({
            //         "width": "",
            //         "flex-wrap": "unset",
            //     })
            //     $("#RemoveFlex_Media").css("display", "flex")
            //     $("#RemoveFlex_Media > div > div").css("width", "")
            // }
            // if ($(window).width() <= 1170) {
            //     $("#CARDsDiv > div").css({
            //         "width": "240px",
            //         "flex-wrap": "unset",
            //     })
            //     $("#RemoveFlex_Media").css("display", "flex")
            //     $("#RemoveFlex_Media > div > div").css("width", "")
            // }
            // if ($(window).width() <= 1108) {
            //     $("#CARDsDiv > div").css({
            //         "width": "225px",
            //         "flex-wrap": "unset",
            //     })
            //     $("#RemoveFlex_Media").css("display", "flex")
            //     $("#RemoveFlex_Media > div > div").css("width", "")
            // }



             // $(".Card").css("width", "210px")
                // $(".TodoList, .Notification, .EmailSent_Box")


                  // $("#For_SetOpacity").on("resize", function () {
        //     if ($(window).width() < 960) {
        //         alert('Less than 960');
        //     }
        //     else {
        //         alert('More than 960');
        //     }
        //     $(this).width() < 500 ? $("#child").hide() : $("#child").show();
        // });


         // .Card{
        //     width: 210px;
        //   }
        //   .TodoList , .Notification , .EmailSent_Box{
        //     width: 280px;
        //   }
        //   #SideBarToggleBtn{
        //     display: none;
        //   }
        //   .sidebar{
        //     display: none;
        //   }
        //   .ResponsiveSideBar{
        //     display: block;
        //   }