import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Badge } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import phonesstand from '../assets/images/2phonesstand.png';
import phonemovie from '../assets/images/phonemovie.png';
import { Checkbox } from '@material-ui/core';
import Logo from '../assets/images/dark.png';
import { Subject, Search, Check, ChatBubble, Notifications, ExpandMoreOutlined, ChevronRightOutlined, Cached, MoreHoriz, ThumbUp, FormatListNumbered, Mail, Person, Settings, ExitToApp, Home, NoteAdd, AttachMoney, InsertLink, Today, MailOutline, Cake, Close, WhatsApp, InsertComment, ExpandLess } from '@material-ui/icons'
import DocSvg from '../assets/images/docs-file-svgrepo-com.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profilePic from '../assets/images/profilepic.jpg';
import logo from '../assets/images/logo.png';
import first from '../assets/images/Chats/first.jpg'
import Second from '../assets/images/Chats/Second.jpg'
import Third from '../assets/images/Chats/Third.jpg'
import Fourth from '../assets/images/Chats/Fourth.jpg'
import Fifth from '../assets/images/Chats/Fifth.jpg'
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFirefox, faGg, faFacebookF, faTwitter, faLinkedinIn, faGoogle, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import email from '../assets/images/email.svg';
import appleBtn from '../assets/images/appleBtn.png';
import googleBtn from '../assets/images/googleBtn.png';
import firebase from '../config/firebaseConfig';


class FirstSection extends Component {
    render() {
        return <div className="FirstSection">
            <div style={{ height: 40, width: 80, background: this.props.BackColor, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} className="icon_span" > <span className="fa-fire" style={{ fontSize: 30, color: this.props.IconColor }}>{this.props.ICON}</span></div>
            <br />
            <div>
                <h5>{this.props.Heading}</h5>
                <p>{this.props.Paragraph}</p>
            </div>
        </div>
    }
}


class NavbarComp2 extends Component {
    render() {
        return <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Brand href="#"><Link to="/" style={{ color: "black" }}><img src={Logo} width={150} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {this.props.NavbarLink1}
                    {this.props.NavbarLink2}
                    {this.props.NavbarLink3}
                    {this.props.NavbarLink4}
                </Nav>
                <Nav className="BtnsNav">
                    {this.props.twitter}
                    {this.props.facebook}
                    {this.props.linkendin}
                    {this.props.LoginBtn}
                    {this.props.SignupBtn}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}


class SecondSection extends Component {
    render() {
        return <div className="SecondSection">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <div className="DivHandle">
                    <b style={{ fontSize: 38 }}>Life is in Your Hands</b>
                    <p style={{ fontSize: 18 }}>24me is an award-winning Personal Assistant that helps millions of people all over the world to boost their productivity. It’s an easy-to-use and yet super powerful app that puts everything related to your schedule in one place: your CALENDAR, TO-DO LIST, NOTES and Personal Accounts. 24me saves you time for the things that matter most in your life.</p>
                </div>
                <div>
                    <img src={phonesstand} width="90%" />
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <div>
                    <img src={phonemovie} width="90%" />
                </div>
                <div className="PTagHandle">
                    <p style={{ marginTop: 40 }}>Put your Life in Order. Let 24me work for you. You deserve it</p>
                </div>
            </div>
        </div>
    }
}

class ThirdSection extends Component {
    render() {
        return <div>
            <img src={this.props.TopImage} width={this.props.width} />
            {/* <p style={{ fontSize: 30, color: "#3c4858" }}>{this.props.Title}</p>
            <p style={{ fontSize: 17 }}>{this.props.Text}</p> */}
            <p style={{ fontSize: 27, color: "#3c4858" }}>{this.props.Title}</p>
            <p style={{ fontSize: 16, lineHeight: 1.3 }}>{this.props.Text}</p>
        </div>
    }
}


class ThirdSection2 extends Component {
    render() {
        return <div>
            <p style={{ fontSize: 25, color: "#3c4858" }}>{this.props.Title}</p>
            <p style={{ fontSize: 17 }}>{this.props.Text}</p>
            <img src={this.props.TopImage} />
        </div>
    }
}

class FourthSection extends Component {
    render() {
        return <div className="FourthDetailSec" >
            <Button variant="light">Pricing Plans</Button>
            <p style={{ fontSize: 30, lineHeight: 1.3 }}>No additional costs.<br />Pay for what you use</p>
            <p style={{ fontSize: 17 }}>Choose the most suitable service for your needs with reasonable price.</p>
            <Button variant="light">Monthly</Button><Button variant="light">Yearly</Button>
            <Badge pill variant="success" style={{ position: "relative", top: -10 }}>
                10% OFF
            </Badge>
        </div>
    }
}


class NavbarComp extends Component {

    logoutUser() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            localStorage.clear("EmailVerified")
            localStorage.clear("Email")
            localStorage.clear("_id")
            localStorage.clear("SuperAdmin")
            window.location.reload()
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return <Navbar expand="lg" id="NavbarCustomize" variant="dark" expanded={this.props.ONEXPAND} onToggle={this.props.ONToggle}>
            <div style={{ display: "flex", justifyContent: "space-between" }} id="SetWidthInSmall">
                {/* <Navbar.Brand href="#" id="ResponsiveBtn"><Link to="/" style={{ color: "black" }}><img src={logo} width={150} /></Link></Navbar.Brand> */}
                {/* <Navbar.Brand href="#" id="ResponsiveBtn"><img src={profilePic} style={{ width: 30, height: 30, borderRadius: "100%", marginLeft: -10, }} /></Navbar.Brand> */}

                <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="BtnOfToggle" onClick={this.props.ToggleBTN} />

                    <div style={{ color: "white" }} id="Btn_ONResponsive">
                        <div style={{ display: "flex", alignItems: "center", paddingLeft: 15 }}>
                            <Nav.Link href="#" onClick={this.props.SearchBar} ><Search /></Nav.Link>
                            {/* <Nav.Link href="#" onClick={this.props.ChatBar} ><ChatBubble /></Nav.Link> */}
                            <Nav.Link href="#" className="ShowNotification" onClick={this.props.Notificate}><Notifications /></Nav.Link>
                            {/* <a href="#" ><img src={profilePic} style={{ width: 30, height: 30, borderRadius: "100%", marginLeft: -10, }} /></a> */}
                            <li style={{ listStyle: "none" }}><a href="#" ><img src={profilePic} style={{ width: 40, borderRadius: "100%", marginLeft: -10 }} /></a>
                                <ul className="ProfileDropdown">
                                    <li><Link to="/Profile"><Person />&nbsp;Profile</Link></li>
                                    <li><a><Settings />&nbsp;Settings</a></li>
                                    <hr />
                                    <li><Link to="/login" onClick={() => this.logoutUser()}><ExitToApp />&nbsp;Logout</Link></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" id="LeftSideNav">
                        <li id="SideBarToggleBtn" onClick={this.props.SidebarToggle}><a><Subject /></a></li>
                        <li><Link to="/">Home</Link></li>
                        <NavDropdown title="Application" className="AppDropdownFor_SmallScreen" id="basic-nav-dropdown">
                            <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>Projects <ChevronRightOutlined /></a></li>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>Tasks <ChevronRightOutlined /></a></li>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>User <ChevronRightOutlined /></a></li>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>Authentication <ChevronRightOutlined /></a></li>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>Account <ChevronRightOutlined /></a></li>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>Shop <ChevronRightOutlined /></a></li>
                                <li><a style={{ display: "flex", justifyContent: "space-between" }}>Utility <ChevronRightOutlined /></a></li>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", background: "#3c4deb" }}>
                                <li style={{ width: "45%" }}><a>Projects</a></li>
                                <li style={{ width: "45%" }}><a>Tasks</a></li>
                                <li style={{ width: "45%" }}><a>User</a></li>
                                <li style={{ width: "45%" }}><a>Authentication</a></li>
                            </div>
                        </NavDropdown>
                        <li className="AppTab"><a>Application <ExpandMoreOutlined /></a>
                            <ul className="ApplicationDropDown">
                                <li><a>Projects <ChevronRightOutlined /></a></li>
                                <li><a>Tasks <ChevronRightOutlined /></a></li>
                                <li><a>User <ChevronRightOutlined /></a></li>
                                <li><a>Authentication <ChevronRightOutlined /></a></li>
                                <li><a>Account <ChevronRightOutlined /></a></li>
                                <li><a>Shop <ChevronRightOutlined /></a></li>
                                <li><a>Utility <ChevronRightOutlined /></a></li>
                                {/* <br /> */}
                                <hr />
                                <Nav>
                                    <li><a>Projects</a></li>
                                    <li><a>Tasks</a></li>
                                </Nav>
                                <Nav>
                                    <li><a>User</a></li>
                                    <li><a>Authentication</a></li>
                                </Nav>
                            </ul>
                        </li>
                        <li><a>Widgets</a></li>
                        <NavDropdown title="Docs" className="DocsDropdownFor_SmallScreen" id="basic-nav-dropdown">
                            <li className="SpecailLink_Responsive">
                                <div>
                                    <img src={DocSvg} width={45} style={{ marginLeft: 20 }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <h6>Documentation</h6>
                                    <p>Awesom Section example for any scenario</p>
                                </div>
                            </li>
                            <li className="SpecailLink_Responsive">
                                <div>
                                    <img src={DocSvg} width={45} style={{ marginLeft: 20 }} />
                                </div>
                                <div style={{ marginLeft: 10 }}>
                                    <h6>Component</h6>
                                    <p>Awesom Section example for any scenario</p>
                                </div>
                            </li>
                            <div style={{ display: "flex", flexWrap: "wrap", padding: 20, paddingRight: 35, background: "#3c4deb" }}>
                                <li style={{ width: "45%" }}><a >Installation</a></li>
                                <li style={{ width: "45%" }}><a >Using Plugins</a></li>
                                <li style={{ width: "45%" }}><a >File structure</a></li>
                                <li style={{ width: "45%" }}><a >component</a></li>
                                <li style={{ width: "45%" }}><a >Build tools</a></li>
                                <li style={{ width: "45%" }}><a >Plugins</a></li>
                                <li style={{ width: "45%" }}><a >Customization</a></li>
                                <li style={{ width: "45%" }}><a >Support</a></li>
                            </div>

                        </NavDropdown>
                        <li className="DocsTab"><a>Docs <ExpandMoreOutlined /></a>
                            <ul className="DocsDropDown">
                                <li className="SpecailLink">
                                    <div>
                                        <img src={DocSvg} width={45} />
                                    </div>
                                    <div style={{ marginLeft: 10 }}>
                                        <h6>Documentation</h6>
                                        <p>Awesom Section example for any scenario</p>
                                    </div>
                                </li>
                                <li className="SpecailLink">
                                    <div>
                                        <img src={DocSvg} width={45} />
                                    </div>
                                    <div style={{ marginLeft: 10 }}>
                                        <h6>Component</h6>
                                        <p>Awesom Section example for any scenario</p>
                                    </div>
                                </li>
                                <br />
                                <Nav>
                                    <li><a>Installation</a></li>
                                    <li><a>Using Plugins</a></li>
                                </Nav>
                                <Nav>
                                    <li><a>File structure</a></li>
                                    <li><a>component</a></li>
                                </Nav>
                                <Nav>
                                    <li><a>Build tools</a></li>
                                    <li><a>Plugins</a></li>
                                </Nav>
                                <Nav>
                                    <li><a>Customization</a></li>
                                    <li><a>Support</a></li>
                                </Nav>
                            </ul>
                        </li>
                    </Nav>
                    <Nav id="RightSideNav">
                        <Nav.Link href="#" onClick={this.props.SearchBar} ><Search /></Nav.Link>
                        <Nav.Link href="#" onClick={this.props.ChatBar} ><ChatBubble /></Nav.Link>

                        <Nav.Link href="#" className="ShowNotification" onClick={this.props.Notificate}><Notifications /></Nav.Link>
                        <li className="ProfileBtn"><a href="#" ><img src={profilePic} style={{ width: 40, borderRadius: "100%", marginLeft: -10, marginTop: -9 }} />&nbsp;&nbsp;John Snow</a>
                            <ul className="ProfileDropdown">
                                <li><Link to="/Profile"><Person />&nbsp;&nbsp;Profile</Link></li>
                                <li><a><Settings />&nbsp;Settings</a></li>
                                <hr />
                                <li><Link to="/login" onClick={() => this.logoutUser()}><ExitToApp />&nbsp;Logout</Link></li>
                            </ul>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    }
}


class Card extends Component {
    render() {
        return <div className="Card">
            <div>
                <h6>{this.props.Label}</h6>
                <span>{this.props.Value}</span>
            </div>
            <div className="CardPercentages">
                <CircularProgressbar value={this.props.Percentage} text={`${this.props.Percentage}%`} />
            </div>
        </div>
    }
}

class TimeLine extends Component {
    render() {
        return <div className="TimeLine" data-timeline-content="axis" data-timeline-axis-style="dashed">
            <div className="TimeLine_header">
                <h6>Timeline</h6>
            </div>
            <div className="Timeline_Content">
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10 }}>
                    <span className="Timeline_Circle"></span>
                    <div id="HandleByMedia">
                        <small style={{ color: "rgb(172, 165, 165)" }}>10:30 AM</small><br />
                        <small style={{ fontSize: 16 }}>Mail sent to</small>
                        <p style={{ color: "rgb(172, 165, 165)" }}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <button>design</button>
                        <button>system</button>
                        <button>creative</button>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10 }}>
                    <span className="Timeline_Circle"></span>
                    <div id="HandleByMedia">
                        <small style={{ color: "rgb(172, 165, 165)" }}>10:30 AM</small><br />
                        <small style={{ fontSize: 16 }}>You liked a comment from</small>
                        <p style={{ color: "rgb(172, 165, 165)" }}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <button>design</button>
                        <button>system</button>
                        <button>creative</button>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10 }}>
                    <span className="Timeline_Circle"></span>
                    <div id="HandleByMedia">
                        <small style={{ color: "rgb(172, 165, 165)" }}>10:30 AM</small><br />
                        <small style={{ fontSize: 16 }}>New likes from</small>
                        <p style={{ color: "rgb(170, 165, 165)" }}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <button>design</button>
                        <button>system</button>
                        <button>creative</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

class TodoList extends Component {
    render() {
        return <div className="TodoList">
            <div className="header">
                <h6>To do list</h6>
                <div>
                    <Cached />
                    &nbsp;&nbsp;<MoreHoriz />
                </div>
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

            </div>
        </div>
    }
}


class Notification extends Component {
    render() {
        return <div className="Notification">
            <div className="header">
                <h6>Notifications</h6>
                <div>
                    <Cached />
                    &nbsp;&nbsp;<MoreHoriz />
                </div>
            </div>
            <div className="NotificationContent">
                <div className="Notify">
                    <span><Notifications /></span>
                    <div>
                        <small>Mail sent to <b>Alex Michael</b></small><br />
                        <small>2 hours ago</small>
                    </div>
                </div>
                <div className="Notify">
                    <span><ThumbUp /></span>
                    <div>
                        <small>You liked a comment from  <b>Sandra Wayne</b></small><br />
                        <small>3 hours ago</small>
                    </div>
                </div>
                <div className="Notify">
                    <span><ThumbUp /></span>
                    <div>
                        <small>New likes from  <b>Jason miller</b></small><br />
                        <small>2 hours ago</small>
                    </div>
                </div>
                <div className="Notify">
                    <span><FormatListNumbered /></span>
                    <div>
                        <small>Mail sent to <b>Alex Michael</b></small><br />
                        <small>2 hours ago</small>
                    </div>
                </div>
                <div className="Notify">
                    <span><Mail /></span>
                    <div>
                        <small>You are now in team with <b>Alex Michael</b></small><br />
                        <small>3 hours ago</small>
                    </div>
                </div>
                <div className="Notify">
                    <span><ThumbUp /></span>
                    <div>
                        <small>New likes from  <b>Jason miller</b></small><br />
                        <small>2 hours ago</small>
                    </div>
                </div>
                <div style={{ width: "100%", height: 40, display: "flex", justifyContent: "center", alignItems: "center", color: "grey" }}>See all Notifications</div>
            </div>
        </div>
    }
}

class EmailSent extends Component {
    render() {
        return <div className="EmailSent_Box">
            <h4>Emails sent</h4>
            <div className="BigCircle">
                <CircularProgressbar value={50} text={`${98}`} styles={buildStyles({ pathTransitionDuration: 0.5, strokeLinecap: "#f0b111", pathColor: "#f0b111" })} />
            </div>
            <div style={{ display: "flex", width: "90%", margin: '0 auto', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ display: "flex", width: 230, justifyContent: "space-between", alignItems: "center", marginTop: 7 }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="smallCirscle"></div>
                        <small>30 not sent</small>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="smallCirscle"></div>
                        <small>38 opened</small>
                    </div>
                </div>
                <br />
                <div style={{ display: "flex", width: 230, justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="smallCirscle"></div>
                        <small>68 success</small>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="smallCirscle"></div>
                        <small>SMTP error</small>
                    </div>
                </div>
                <br />
                <button>Open insights</button>
            </div>
        </div>
    }
}

class Calender extends Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return <div className="Calender_Box">
            <div className="header">
                <div>
                    <small>2020</small>
                    <h5>Sunday Apr 6</h5>
                </div>
            </div>
            <Calendar
                onChange={this.onChange}
                value={this.state.date}
            />
        </div>
    }
}


class TabNotification extends Component {
    render() {
        return <div className="TabNotification">
            <div className="TimeLine_header">
                <h6>Notifications</h6>
            </div>
            <div className="NotificationContent">
                <div className="TabNotify">
                    <div style={{ width: 50, height: 50, background: "rgb(49, 49, 189)", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>AM</div>
                    <div style={{ width: "90%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <div style={{ width: "98%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <b>Alex Michael</b>
                            <small>2 hours ago</small>
                        </div>
                        <h6>some quick example text to build on the card title</h6>
                    </div>
                </div>
                <div className="TabNotify">
                    <div style={{ width: 50, height: 50, background: "rgb(231, 170, 58)", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>SW</div>
                    <div style={{ width: "90%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <div style={{ width: "98%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <b>Sandra Wayne</b>
                            <small>3 hours ago</small>
                        </div>
                        <h6>some quick example text to build on the card title</h6>
                    </div>
                </div>
                <div className="TabNotify">
                    <div style={{ width: 50, height: 50, background: "skyblue", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>JM</div>
                    <div style={{ width: "90%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <div style={{ width: "98%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <b>Jason miller</b>
                            <small>2 hours ago</small>
                        </div>
                        <h6>some quick example text to build on the card title</h6>

                    </div>
                </div>
                <div className="TabNotify">
                    <div style={{ width: 50, height: 50, background: "rgb(51, 70, 59)", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>MJ</div>
                    <div style={{ width: "90%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <div style={{ width: "98%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <b>Alex Michael</b>
                            <small>2 hours ago</small>
                        </div>
                        <h6>some quick example text to build on the card title</h6>
                    </div>
                </div>
                <div className="TabNotify">
                    <div style={{ width: 50, height: 50, background: "rgb(49, 49, 189)", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>RN</div>
                    <div style={{ width: "90%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <div style={{ width: "98%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <b>Richard Nixon</b>
                            <small>3 hours ago</small>
                        </div>
                        <h6>some quick example text to build on the card title</h6>
                    </div>
                </div>
                <div style={{ width: "100%", height: 40, display: "flex", justifyContent: "center", alignItems: "center", color: "grey" }}>See all Notifications</div>
            </div>
        </div>
    }
}


class Sidebar extends Component {
    render() {
        return <div className="sidebar">
            <br />
            <img src={logo} width={130} />
            <br /><br />
            <div className="SideBarOptions">
                <Link to="/Dashboard" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, float: "left", background: this.props.HomeBackground, fontSize: 15, color: this.props.HomeBackground ? "white" : "grey", fontFamily: "cursive", textDecoration: "none" }}>
                    <Home />
                    Home
                </Link>
                {/* <Link to="/Notes" href="#" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotesBackground, color: this.props.NotesBackground ? "white" : "grey" }}>
                    <NoteAdd />
                    Notes
                </Link> */}
                <li style={{ listStyle: "none" }}><Link style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, float: "left", fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotesBackground, color: this.props.NotesBackground ? "white" : "grey" }}>
                    <NoteAdd />
                    Notes
                </Link>
                    <div style={{ marginLeft: 100, marginTop: 110 }}>
                        <Link to="/AddNotes"><button style={{ width: "97%", background: "blue", color: "white", borderRadius: 5, height: 40, border: "none" }}>Add Notes</button></Link>
                        <br /><br />
                        <small>Filters</small>
                        <li><Link to="/Notes">All Notes</Link></li>
                        <hr />
                        <Link to="/AddStickyNotes"><button style={{ width: "97%", background: "blue", color: "white", borderRadius: 5, height: 40, border: "none" }}>Add Sticky</button></Link>
                        <br /><br />
                        <small>Filters</small>
                        <li><Link to="/StickyNotes">Sticky Notes</Link></li>
                    </div>
                </li>
                <li style={{ listStyle: "none" }}><Link style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, float: "left", fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.TodoBackground, color: this.props.TodoBackground ? "white" : "grey" }}>
                    <FormatListNumbered />
                    To-do tasks
                </Link>
                    <div style={{ marginTop: 220 }}>
                        <Link to="/AddTask"><button style={{ width: "97%", background: "blue", color: "white", borderRadius: 5, height: 40, border: "none" }}>Add Task</button></Link>
                        <br /><br />
                        <small>Filters</small>
                        <li><Link to="/AllTasks">All Tasks</Link></li>
                        <li><Link to="/AllTasks" >Important</Link></li>
                        <li><Link to="/AllTasks" >Completed</Link></li>
                        <li><Link to="/AllTasks" >Trashed</Link></li>
                        <hr />
                        <small>Labels</small>
                        <li><a href="#">Fronted</a></li>
                        <li><a href="#">Backend</a></li>
                        <li><a href="#">Doc</a></li>
                    </div>
                </li>
                <Link to="/Notification" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotificationBackground, color: this.props.NotificationBackground ? "white" : "grey" }}>
                    <Notifications />
                    Notifications
                </Link>
                <Link to="/PayBill" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, float: "left", fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.PaybillBackground, color: this.props.PaybillBackground ? "white" : "grey" }}>
                    <AttachMoney />
                    Pay Bills
                </Link>
                <Link to="/Contacts" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.ContactBackground, color: this.props.ContactBackground ? "white" : "grey" }}>
                    <InsertLink />
                    Contacts
                </Link>
                <Link to="/Calender" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, float: "left", fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.CalenderBackground, color: this.props.CalenderBackground ? "white" : "grey" }}>
                    <Today />
                    Calendar
                </Link>
                <Link to="/BirthDay" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.BirthBackground, color: this.props.BirthBackground ? "white" : "grey" }}>
                    <Cake />
                    Birthdays
                </Link>
                <Link to="/Users" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "50%", height: 113, borderRadius: 13, fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.UserBackground, color: this.props.UserBackground ? "white" : "grey", float: "left", }}>
                    <Person />
                    Users
                </Link>
            </div>
        </div>
    }
}


class SideBarForSmallScreen extends Component {
    render() {
        return <div className="ResponsiveSideBar">
            <div className="ResponsiveSideBar_Content">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to="/" style={{ background: this.props.HomeBackground, fontSize: 15, color: "white", fontFamily: "cursive", textDecoration: "none" }}>
                        <Home />&nbsp;Home
                    </Link>
                    {/* <Link to="/Notes" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotesBackground, color: "white" }}>
                        <NoteAdd />&nbsp;Notes
                    </Link> */}
                    <li style={{ listStyle: "none", paddingTop: 11 }}><Link style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.TodoBackground, color: "white" }}>
                        <NoteAdd />&nbsp;Notes
                        </Link>
                        <div style={{ marginTop: -377, marginLeft: 10 }}>
                            <Link to="/AddNotes"><button style={{ width: "97%", background: "blue", color: "white", borderRadius: 5, height: 40, border: "none" }}>Notes</button></Link>
                            <br /><br />
                            <small style={{ color: "black" }}>Filters</small>
                            <li><Link to="/Notes">Notes</Link></li>
                            <hr />
                            <Link to="/AddStickyNotes"><button style={{ width: "97%", background: "blue", color: "white", borderRadius: 5, height: 40, border: "none" }}>Sticky Notes</button></Link>
                            <br /><br />
                            <small style={{ color: "black" }}>Filters</small>
                            <li><Link to="/StickyNotes">Sticky Notes</Link></li>
                        </div>
                    </li>
                    <Link to="/Notification" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotificationBackground, color: "white" }}>
                        <Notifications />&nbsp;Notifications
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to="/PayBill" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.PaybillBackground, color: "white" }}>
                        <AttachMoney />&nbsp; Pay Bills
                    </Link>
                    <Link to="/Contacts" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.ContactBackground, color: "white" }}>
                        <InsertLink />&nbsp;Contacts
                    </Link>
                    <Link to="/Calender" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.CalenderBackground, color: "white" }}>
                        <Today />&nbsp;Calendar
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <li style={{ listStyle: "none", paddingTop: 11 }}><Link style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.TodoBackground, color: "white" }}>
                        <FormatListNumbered />&nbsp;To-do tasks
                        </Link>
                        <div>
                            <Link to="/AddTask"><button style={{ width: "97%", background: "blue", color: "white", borderRadius: 5, height: 40, border: "none" }}>Add Task</button></Link>
                            <br /><br />
                            <small style={{ color: "black" }}>Filters</small>
                            <li><Link to="/AllTasks">All Tasks</Link></li>
                            <li><Link to="/AllTasks" >Important</Link></li>
                            <li><Link to="/AllTasks" >Completed</Link></li>
                            <li><Link to="/AllTasks" >Trashed</Link></li>
                            <hr />
                            <small style={{ color: "black" }}>Labels</small>
                            <li><a href="#">Fronted</a></li>
                            <li><a href="#">Backend</a></li>
                            <li><a href="#">Doc</a></li>
                        </div>
                    </li>
                    <Link to="/BirthDay" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.BirthBackground, color: "white" }}>
                        <Cake />&nbsp;Birthdays
                    </Link>
                    <Link to="/Users" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.UserBackground, color: "white" }}>
                        <Person />&nbsp;Users
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: 20 }} >
                    <div>
                        <p>Follow us On</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                        <span><FontAwesomeIcon icon={faGoogle} /></span>
                        <span><FontAwesomeIcon icon={faWhatsapp} /></span>
                    </div>
                </div>
            </div>

        </div>
    }
}

class ChatSideBar extends Component {

    render() {
        return <div className="animated slideInRight delay-0.5s ChatSideBar">
            <div className="ChatHeader">
                <div>
                    Chat<br />
                    3 new conversations
                </div>
                <div style={{ cursor: "pointer" }} onClick={this.props.HideSidebar}>
                    <Close />
                </div>
            </div>

            <div className="Chatheads">
                <div className="Chathead_Content">
                    <div><img src={first} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>John Sullivan</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Second} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>Heather Wright</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Third} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>James Lewis</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Fourth} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>Martin Gray</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Fifth} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>John Snow</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={first} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>John Sullivan</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Second} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>Heather Wright</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Third} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>James Lewis</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Fourth} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>Martin Gray</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Fifth} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>John Snow</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={first} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>John Sullivan</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Second} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>Heather Wright</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Third} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>James Lewis</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Fourth} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>Martin Gray</b>
                        Working remotely
                    </div>
                </div>
                <div className="Chathead_Content">
                    <div><img src={Fifth} style={{ width: 50, height: 50, borderRadius: "100%" }} /></div>
                    <div style={{ width: "80%", marginLeft: 15, display: "flex", flexDirection: "column" }}>
                        <b>John Snow</b>
                        Working remotely
                    </div>
                </div>
            </div>
            <button><WhatsApp /> Open Chat</button>
        </div>
    }
}


class SixthSection extends Component {
    render() {
        return <div className="unknown">
            <img src={this.props.MainPic} height={250} />
            <p style={{ color: "grey", marginLeft: 5 }}>{this.props.extra}</p>
            <div style={{ padding: 20 }}>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={this.props.ProfilePic} width={50} height={50} style={{ borderRadius: "100%" }} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
                        <b style={{ fontSize: 21 }}>{this.props.name}</b>
                        <p style={{ color: "grey" }}>{this.props.designation}</p>
                    </div>
                </div>
                <hr />
                <div >
                    <p style={{ color: "grey" }}><b style={{ color: "orange" }}><InsertComment /></b>{this.props.Paragraph}</p>
                </div>
                <br />
                <a href="#">Read the case study ›</a>
            </div>
        </div>
    }
}

class SevenSection extends Component {

    componentDidMount() {
        $('.SubscribeInput').blur(function () {
            $('#SubscribeBtn').css({
                background: "white",
                color: "black",
            });
        })
        $('.SubscribeInput').focus(function () {
            $('#SubscribeBtn').css({
                background: "black",
                color: "white",
                "animation-delay": "2s"
            });
        });
    }


    render() {
        return <div className="SevenSection">
            <svg height="50px" width="100%" style={{ marginTop: -57 }} fill="#D7E6F5">
                <path d="M1280 30h-8.1c-5.7 0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" />
            </svg>
            <img src={email} width={180} />
            <h2 style={{ color: "grey" }}>Subscribe to our Newsletter</h2>
            <p style={{ color: "grey" }}>Enter your email address to get updates on AnyDesk special offers, products and events.</p>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <input type="email" placeholder="Enter your email address" onChange={this.props.HandleChange} className="SubscribeInput" />
                <button id="SubscribeBtn" >Sign up</button>
            </div>
        </div>
    }
}


class EightSection extends Component {
    render() {
        return <div className="EightSection">
            <svg height="50px" width="100%" fill="#2F466C" style={{ position: "absolute", top: "-28px" }}>
                <path d="M1280 30h-27.4c-.4-.2-.9-.1-1.5-.3-1.8.5-2.9-.1-4.6-.2-1.7.1-3.3.3-5 .3-7.2.1-14-.5-21-.6-.6 0-1.1-.1-1.7-.2-4.8-.5-9.6-.5-14.2 0-1.7.2-3.5.4-5.1.3-3.1-.2-6.3 0-9.4 0-4.4 0-8.6-.3-12.9-.2-4.8.1-9-.8-13.8-.5-.2 0-.7-.1-.9-.1-1.5-.3-3.1-.3-5-.2-1.1.1-2.2.1-3.5 0-3.1 0-3.1 0-6.4.4-2-.1-3.9-.4-5.7-.4-2.6 0-2.9-.6-4.6-.8h-.5c-2.4.1-3.9-.2-5.5-.6-1.7-.4-3.7-.6-6.1-.3-.7.1-1.8 0-2.8 0-3.7-.3-7.5-.5-11.2-.8-6.1-.6-11.9-1.1-18-1.7-2.8-.3-5.3-.6-6.8-1.1-2.4.1-4.6.2-6.8.4-2.8-.3-5.5-.7-7-1.4-.4-.2-1.8-.4-2.4-.5-4 .1-7.7.3-11.4.4-.5-.1-1.1-.3-1.8-.4-1.3-.1-2.6-.4-3.7-.3-3.7.2-7 0-10.5-.1-3.7-.1-6.6-.4-9.6-.9-2-.4-4.4-.8-7.5-.4-1.7.2-3.9.1-5.7.2-2.2.1-4.4 0-6.3-.2-1.8-.3-3.5-.4-5.7-.3-2.6.1-4.8 0-6.8-.3-2-.2-4-.4-6.1-.5-1.8-.1-4.2-.1-5.3-.6-1.3-.5-3.3-.6-5.1-.6-2.9 0-5.3-.2-7.5-.6-1.8-.3-3.7-.5-6.1-.4-1.3 0-2.9 0-3.9-.2-2-.4-4.2-.4-6.8-.5-1.8-.8-4.6-1.2-8.6-1-3.3-.4-7.4-.2-10.1-.9-.9-.3-2.9-.3-4.4 0-2.2.3-4.6.3-6.8 0-2.6-.4-5.1-.3-7.7-.1-5.5.5-11 .9-17.1 1-.9 0-1.8.1-2.8.3-2.8.4-5.3.6-8.5.4-2-.1-4.2 0-6.6-.1-2.4.4-4.6.9-8.1.9-.7 0-1.5.1-2 .2-3.3.6-6.8.7-10.5.4-7-.4-14.2-.7-21.3-.9-1.3 0-2.6-.2-3.9-.3-4 .8-8.6.8-13.4.6-3.3-.1-6.6-.5-10.3-.5-1.5 0-3.5-.2-4.6-.6-.6-.2-1.3-.3-2.6-.2h-2.2c-5.3-.8-12-1.1-15.8-2.4-6.1-.2-12-.4-17.6-.6-4.8-.2-9.6-.3-14.3.2-1.1.1-2.8.1-4 0-1.3-.1-2.2-.1-3.3 0-2.8.3-5.3 0-7.5-.4-1.5.2-2.6.4-3.9.6-1.5.1-2.9.3-4.4.3-4.2-.1-8.6-.1-12.9 0-1.5 0-2.8-.1-3.7-.4-2-.6-4.8-.6-7.5-.7-4-.1-8.1-.2-12-.4-2.6-.5-4-1.2-7.7-1.4-2.8.4-5.7.3-8.8.1-1.8-.1-3.3-.3-4.8-.6-1.3-.2-2.6-.6-4-.6-2.8-.1-5.3-.3-6.8-.9-.2.3-.9.2-1.5.2-3.5-.3-7.4-.2-10.8-.6-.9-.2-2.6.1-3.9.1-.7 0-1.5 0-2.2-.1-1.5-.1-2.9-.2-4.6-.3-4.4-.2-8.5-.7-12.1-1.4-.9-.2-2-.4-3.1-.4-2 0-3.7-.3-5.3-.6-2.6-.4-5.1-.8-8.1-1.1-3.9-.4-7.5-.9-12.3-.7-3.1.1-6.4-.6-7-1.3-.4-.7-2-1.1-3.7-1.6-2.4 0-4.6-.1-6.6-.1-3.7 0-7.4-.2-11 .1-3.7.3-7.5.5-11.6.1-1.7-.1-3.5 0-5.5 0-1.5.7-3.5 1.1-6.6 1.1-2.8 0-4.4.4-6.1.8-.9.2-1.7.4-2.6.6-3.3-.3-4.2-.3-8.6 0-.7 0-1.5.1-2.2.1s-1.5.1-2 .2c-2.2.4-4 .8-7 .9-.6 0-1.3.2-1.7.4-.9.3-1.7.6-2.6.8-3.5-.2-6.4 0-9.7.2-5 .2-10.1.2-15.3.3-5 0-10.1 0-14.9-.4-.4 0-.7-.1-1.1-.1-3.7-.1-7.4-.4-10.8.2-.7.1-1.8.1-2.8.2-3.5.3-6.8.4-10.1-.1-4-.6-8.5-.1-12.7 0-.7 0-1.5.2-1.8.3-1.3.5-3.3.5-5.3.5h-3.3c-2.4 1.1-3.5 1.4-8.3 2.2-1.5.2-3.1.4-4.8.6-2.4.3-5 .3-7.5.2-3.1-.1-6.3-.2-9.2-.4-1.3 0-2.8-.1-3.9-.3-2.6-.5-4.8-.6-7.5-.1-1.2.3-3.4.3-3.6.6-.9.6-3.1.7-4.8.9-3.5.6-7.2.9-9.6 1.8-1.3.5-3.3.8-5.1 1.1-2 .4-4 .8-6.3.9-3.3.2-6.1.6-7.7 1.2-1.3 0-2.4 0-3.3.1-1.1.1-2 .3-3.1.4-.9.1-2 0-2.8 0-.9.1-1.5.5-2.4.6-1.7.2-3.5.4-5.3.6-4.2.3-8.6.3-12.5.7-4.8.5-9.4.7-14.3.4h-1.8c-5.1-.3-10.5-.2-15.3-.8-3.1-.5-6.8-.6-10.8-.5-3.3.1-6.6-.1-9.7-.5-1.7-.2-3.5-.5-5.3-.6-2.2-.1-4-.2-5.7-.7-.6-.2-1.8-.3-2.6-.2-3.3.1-6.1-.2-9-.5-2.8-.2-5.1-.5-6.6-1-2.6-.9-6.4-1-10.7-.8-2.6.2-5 .5-6.1 1-.7.4-2.2.6-3.5.8-1.1.2-2.8.3-3.5.5-1.5.4-3.3.5-5 .7-4.2.6-9 .7-13.6.8-7.2.2-14.5.5-21.5-.3-1.7-.2-3.5-.2-5.3.1 0 .7-1.8 1-3.9 1.4-2 .4-3.9.8-6.1 1-3.7.6-6.8 1.3-11 1.8-5.3.6-10.7 1.1-16 1.7-3.9.4-7.5.7-11 1.2-1.3.2-2.9.3-4.4.4-2.6.2-5.7.2-7.9.6-3.3.6-6.6.7-10.5.7-2.4 0-5 .3-7.4.4-3.1.8-7.5.9-11.2 1.5-2.6.4-5.1.4-7.9.2-3.7-.2-7.4-.3-11 0-.9.1-2 .1-2.9 0-4.8-.3-9-.1-12.5.8-.4.1-.9.1-1.5.2-4 .6-9 .7-12.9 1.3-2.4-.1-4.2 0-5.3.6-.2.1-1.5.1-2.2.2-1.1 0-2.6 0-3.5.1l-7.2.3H0"></path>
            </svg>
            <div style={{ display: "flex", flexDirection: "column", width: 80 }}>
                <h5>About</h5>
                <p><a href="#">About</a></p>
                <p><a href="#">Careers</a></p>
                <p><a href="#">Careers</a></p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: 80 }}>
                <h5>Account</h5>
                <p><a href="#">Account</a></p>
                <p><a href="#">My tasks</a></p>
                <p><a href="#">Projects</a></p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: 80 }}>
                <h5>Resources</h5>
                <p><a href="#">Help</a></p>
                <p><a href="#">Terms</a></p>
                <p><a href="#">Privacy</a></p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: 285 }} >
                <div>
                    <p>We are driven to deliver results for all your businesses.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={appleBtn} />
                    <img src={googleBtn} style={{ marginLeft: 10 }} />
                </div>
            </div>
        </div>
    }
}

class ScrollTop extends Component {

    componentDidMount() {
        var lastScrollTop = 0;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();

            if (st > lastScrollTop) {
                $('#ScrolltoTop').fadeIn(500);
            }
            if ($(this).scrollTop() == 0) {
                $('#ScrolltoTop').fadeOut(500);
            }
            lastScrollTop = st;
        });
    }


    render() {
        return <a href="#ForTopScroll"><div className="ScrolltoTop" id="ScrolltoTop"><ExpandLess color="white" /></div></a>
    }
}



class TextInput extends Component {

    render() {
        return <div className="Textinput_Design">
            <span style={{ width: 70 }}>{this.props.icon}</span>
            <input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.HandleChange} autoComplete="off" />
            <span onClick={this.props.HideShow_Password} style={{ color: "blue" }}>{this.props.PasswordIcon}</span>
        </div>
    }
}



class TextInput2 extends Component {

    render() {
        return <div className="Textinput_Design2" id={this.props.MainId}>
            <span style={{ width: 70 }}>{this.props.icon}</span>
            <input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.HandleChange} autoComplete="off" id={this.props.InputID}/>
            <span onClick={this.props.HideShow_Password} style={{ color: "blue" }}>{this.props.PasswordIcon}</span>
        </div>
    }
}

class Features extends Component {
    render() {
        return <div style={{ padding: 15, paddingTop: 30, display: "flex", flexDirection: "row", borderBottom: "1px solid lightgrey", marginTop: 25 }}>
            <div style={{ width: 20, height: 20, borderRadius: "100%", background: "#74d5ed", display: "flex", justifyContent: "center", alignItems: "center", padding: 5 }}>
                <p style={{ color: "blue" }}><Check /></p>
            </div>
            <p style={{ fontSize: 20, marginTop: -7, marginLeft: 15, color: "grey" }}>{this.props.feature}</p>
        </div>
    }
}

class Plans extends Component {
    render() {
        return <div style={{ background: "#6e00ff", padding: "2rem", paddingTop: 20, color: "white", display: "flex", justifyContent: "center", flexDirection: "column", borderTopLeftRadius: 8, borderTopRightRadius: 8, position: "relative" }}>
            <h3>{this.props.Heading}</h3>
            <span>
                <span style={{ verticalAlign: "top" }}>£</span>
                <span style={{ fontSize: "3.5rem", fontWeight: 300 }}>{this.props.price}</span>
                <span>/month</span>
            </span>
            <div style={{ position: "absolute", width: "73%", left: "0%", bottom: "-46px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ width: "137%" }}>
                    <path fill="rgb(110, 0, 255)" fill-opacity="1" d="M0,256L34.3,218.7C68.6,181,137,107,206,112C274.3,117,343,203,411,202.7C480,203,549,117,617,101.3C685.7,85,754,139,823,138.7C891.4,139,960,85,1029,80C1097.1,75,1166,117,1234,149.3C1302.9,181,1371,203,1406,213.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    }
}


export {
    NavbarComp,
    Card,
    TimeLine,
    TodoList,
    Notification,
    EmailSent,
    Calender,
    TabNotification,
    Sidebar,
    ChatSideBar,
    FirstSection,
    SecondSection,
    ThirdSection,
    ThirdSection2,
    FourthSection,
    SideBarForSmallScreen,
    TextInput,
    Features,
    Plans,
    SixthSection,
    SevenSection,
    EightSection,
    ScrollTop,
    NavbarComp2,
    TextInput2
}
