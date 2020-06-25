import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import {
    Link
} from "react-router-dom";
import { ChevronRightOutlined, Cached, MoreHoriz, ThumbUp, FormatListNumbered, Mail, Person, Settings, ExitToApp, Home, NoteAdd, AttachMoney, InsertLink, Today, MailOutline, Cake, Close, WhatsApp, InsertComment, ExpandLess } from '@material-ui/icons'
import '../admin.css';


class Sidebar extends Component {
    render() {
        return <div className="sidebar">
            <br />
            <img src={logo} width={130} />
            <br /><br />
            <div className="admintabs">
                <ul>
                    <li><Link to="/AdminDashboard" style={{ background: this.props.HomeBackground, color: this.props.HomeColor }}><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} />Dashboard</span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/Pages" style={{ background: this.props.PagesBackground, color: this.props.PagesColor }}><span><NoteAdd color="blue" fontSize="small" style={{ marginRight: 7 }} />Pages</span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/AllUsers" style={{ background: this.props.AllUserBackground, color: this.props.AllUserColor }}><span><Person color="blue" fontSize="small" style={{ marginRight: 7 }} />Users</span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/EmailSubscribers" style={{ background: this.props.EmailSubscriberBackground, color: this.props.EmailSubscriberColor }}><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} /><small  style={{ fontSize : 15 }}>Email&nbsp;Subscribers</small></span> <ChevronRightOutlined /></Link></li>
                    <li><a><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} />Billing</span> <ChevronRightOutlined /></a></li>
                    <li><Link to="/Feedback"><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} />feedback</span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/Invoice" style={{ background: this.props.InvoiceBackground, color: this.props.InvoiceColor }}><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} />Invoice</span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/EmailTemplateList" style={{ background: this.props.EmailTempBackground, color: this.props.EmailTempColor }}><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} /><small  style={{ fontSize : 15 }}>Email&nbsp;Template</small></span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/EditEmailTemplate" style={{ background: this.props.EmailTempBackground, color: this.props.EmailTempColor }}><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} /><small  style={{ fontSize : 15 }}>Edit&nbsp;Email&nbsp;Template</small></span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/Promotions"><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} />Promotions</span> <ChevronRightOutlined /></Link></li>
                    <li><Link to="/FeedbackReply"><span><Home color="blue" fontSize="small" style={{ marginRight: 7 }} />Feedback&nbsp;Reply</span> <ChevronRightOutlined /></Link></li>
                </ul>
            </div>
        </div>
    }
}

class BottomTab extends Component {
    render() {
        return <div className="ResponsiveSideBar">
            <div className="ResponsiveSideBar_Content">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to="/AdminDashboard" style={{ background: this.props.HomeBackground, fontSize: 15, color: "white", fontFamily: "cursive", textDecoration: "none" }}>
                        <Home />&nbsp;Dashboard
                    </Link>
                    <Link to="/Pages" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotificationBackground, color: "white" }}>
                        <NoteAdd />&nbsp;Pages
                    </Link>
                    <Link to="/AllUsers" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotificationBackground, color: "white" }}>
                        <Person />&nbsp;Users
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotificationBackground, color: "white" }}>
                        <NoteAdd />&nbsp;Billing
                    </Link>
                    <Link to="/Feedback" style={{ fontSize: 15, fontFamily: "cursive", textDecoration: "none", background: this.props.NotificationBackground, color: "white" }}>
                        <Person />&nbsp;feedback
                    </Link>
                    <Link to="/Invoice" style={{ background: this.props.HomeBackground, fontSize: 15, color: "white", fontFamily: "cursive", textDecoration: "none" }}>
                        <Home />&nbsp;Invoice
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Link to="/EmailTemplateList" style={{ background: this.props.EmailTempBackground, fontSize: 15, color: "white", fontFamily: "cursive", textDecoration: "none" }}>
                        <Home />&nbsp;Email Templates
                    </Link>
                    <Link to="/Promotions" style={{ background: this.props.HomeBackground, fontSize: 15, color: "white", fontFamily: "cursive", textDecoration: "none" }}>
                        <Home />&nbsp;Promotions
                    </Link>
                    <Link to="/EmailSubscribers" style={{ background: this.props.EmailSubscriberBackground, fontSize: 15, color: "white", fontFamily: "cursive", textDecoration: "none" }}>
                        <Home />&nbsp;Email Subscribers
                    </Link>
                </div>

            </div>

        </div >
    }
}


export {
    Sidebar,
    BottomTab
}