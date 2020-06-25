import IntroVideo from '../assets/videos/24me_main_video.mp4';
import React, { Component } from 'react';
import { FirstSection, NavbarComp, ScrollTop, SecondSection, ThirdSection, ThirdSection2, FourthSection, Plans, Features, SixthSection, SevenSection, EightSection, NavbarComp2 } from '../component/index';
import pointer1 from '../assets/images/pointer1.svg';
import first from '../assets/images/first.svg';
import second from '../assets/images/second.svg';
import third from '../assets/images/third.svg';
import fourth from '../assets/images/fourth.svg';
import fifth from '../assets/images/fifth.svg';
import sixth from '../assets/images/sixth.svg';
import menu from '../assets/images/menu.png';
import { Button, Nav } from 'react-bootstrap';
import aipinstitutec254e2 from '../assets/images/aip-institute-c254e2.png';
import airportmuenster5ded7b from '../assets/images/airport-muenster-5ded7b.png';
import spidercamstadium29ae3d from '../assets/images/spidercam-stadium-29ae3d.png';
import janpeters7d72ce from '../assets/images/jan-peters-7d72ce.png';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router'

import $ from 'jquery';
import { ExpandLess, ChatBubble, Cancel } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYelp, faFirefox, faGg, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import ChatBot from 'react-simple-chatbot';
import CookieConsent, { Cookies } from "react-cookie-consent";
import styled from 'styled-components';
const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome to our shop",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please type your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking options to eat"
    },
    {
        id: "Asking options to eat",
        message: "Hi {previousValue}, Glad to know you !!",
        trigger: "Done"
    },
    {
        id: "Done",
        message: "Have a great day !!",
        end: true
    }
];
export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            home: true,
            User: true
        }
    }


    componentDidMount() {
        if (this.state.home === true) {
            document.getElementById("ScrolltoTop").style.display = "none"
            // document.getElementById("ChatBot").style.display = "none"
            if ($(window).width() < 800) {
                var $video = $("#click");
                $video.attr('controls', '');
                $video.attr('autoPlay', 'autoPlay');
                $video.attr('loop', 'loop');
                $video.attr('controlsList', 'nofullscreen nodownload');
            }
            else {
                var $video = $("#click");
                $video.attr('autoPlay', 'autoPlay');
                $video.attr('loop', 'loop');
                $video.removeAttr('controls');
                $video.removeAttr('controlsList');
            }

            $(window).on('resize', function () {
                if ($(window).width() < 700) {
                    var $video = $("#click");
                    $video.attr('controls', '');
                    $video.attr('autoPlay', 'autoPlay');
                    $video.attr('loop', 'loop');
                    $video.attr('controlsList', 'nofullscreen nodownload');
                }
                if ($(window).width() > 700) {
                    var $video = $("#click");
                    $video.attr('autoPlay', 'autoPlay');
                    $video.attr('loop', '');
                    $video.removeAttr('controls');
                    $video.removeAttr('controlsList');
                }
            });

        }

        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));

    }

    callApi = async () => {
        const response = await fetch('/Dashboard');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        console.log(this.state)
        return <div style={{ position: "relative" }} id="ForTopScroll">
            {/* <a href="#ForTopScroll"><div className="ScrolltoTop" id="ScrolltoTop"><ExpandLess color="white" /></div></a> */}
            <ScrollTop />
            <div className="ChatIcon" onClick={() => this.setState({ chatbot: !this.state.chatbot })}>
                <div style={{ color: "white", fontSize: 32, display: "flex", justifyContent: "center", alignItems: "center" }}>{this.state.chatbot ? <Cancel /> : <ChatBubble />}</div>
            </div>
            {this.state.chatbot && <div id="ChatBot">
                <ChatBot steps={steps} />
            </div>}
            <CookieConsent
                location="bottom"
                buttonText="Sure man!!"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
                <span style={{ fontSize: "10px" }}>
                    This bit of text is smaller :O
                </span>
            </CookieConsent>
            <NavbarComp2 NavbarLink1={<Nav.Link className="NavLink_Style"><Link to="/"  >Home</Link></Nav.Link>} NavbarLink2={<Nav.Link href="#24MeSection" className="NavLink_Style" >Features</Nav.Link>} NavbarLink3={<Nav.Link href="#PricingPlan" className="NavLink_Style" >Pricing</Nav.Link>} NavbarLink4={<Nav.Link className="NavLink_Style" >Case Studies</Nav.Link>} twitter={<Nav.Link><Link className="twitterIcon" ><FontAwesomeIcon icon={faTwitter} /></Link></Nav.Link>} facebook={<Nav.Link><Link className="facebookIcon" ><FontAwesomeIcon icon={faFacebookF} /></Link></Nav.Link>} linkendin={<Nav.Link><Link className="LinkedinIcon" ><FontAwesomeIcon icon={faLinkedinIn} /></Link></Nav.Link>} LoginBtn={<Nav.Link><Link to="/login" className="LoginBtn_Design2" >Login</Link></Nav.Link>} SignupBtn={<Nav.Link><Link to="/Signup" style={{ color: "white", padding: 7, borderRadius: 5, border: "1px solid #6e00ff", background: "#6e00ff", paddingLeft: 15, paddingRight: 15, textDecoration: "none" }} >Signup</Link></Nav.Link>} />
            <video width="100%" autoPlay muted loop id="click">
                <source src={IntroVideo} type="video/mp4" />
            </video>
            <div className="Services">
                <FirstSection BackColor="#ffddd6" IconColor="#ff5630" ICON={<FontAwesomeIcon icon={faYelp} />} Heading="Professional Design" Paragraph="Achieve virtually any design and layout from within the one template" />
                <FirstSection BackColor="#e2ccff" IconColor="#6e00ff" ICON={<FontAwesomeIcon icon={faFirefox} />} Heading="Front Strategy" Paragraph="We strive to figure out ways to help your business grow through all platforms" />
                <FirstSection BackColor="#d7f0e5" IconColor="#36b37e" ICON={<FontAwesomeIcon icon={faGg} />} Heading="Unlimited Power" Paragraph="Find what you need in one template and combine features at will" />
            </div>
            <div className="Arc">
                <img src={pointer1} className="ArcHandle" />
                <br />
                <p>It is fast and easy. Create your first and ongoing website with Front.</p>
            </div>
            <SecondSection />
            <div className="ThirdSection" id="24MeSection">
                <div className="items">
                    <ThirdSection width="100" TopImage={first} Title="Online collaboration" Text="Collaborate and communicate with ease, whether you’re holding online meetings and presentations or working on the same document from the other side of the world" />
                    <ThirdSection width="100" TopImage={second} Title="Built-in file transfer" Text="Simply copy and paste or use the new transfer tab to transfer files between computers." />
                    <ThirdSection width="100" TopImage={third} Title="Lightweight" Text="No administrative privileges or installation needed. Simply download the 3MB file and you’re off. Require unattended access to your computer when you’re on the road? No problem, you’ll just need to install and set a password." />
                    <ThirdSection width="100" TopImage={fourth} Title="Make it yours" Text="Customize the AnyDesk user interface to give customers a remote desktop experience consistent with your brand." />
                    <ThirdSection width="100" TopImage={fifth} Title="Record sessions" Text="Both the IT professional and the user whose computer they access can get a recording of each session. This adds an extra level of security and is handy for training purposes too." />
                    <ThirdSection width="100" TopImage={sixth} Title="Own network" Text="No cloud, no problem. If you need full control of your data, setting up your own Enterprise Network is easy. Unencrypted data will never leave your DMZ." />
                </div>
                <div className="me24Handle">
                    <ThirdSection2 TopImage={menu} Title="The 24me Experience" Text="Speak to 24me and your task wil automatically be to your list. No need to wate time typing in tasks" />
                </div>
            </div>
            <div className="FourthSection" id="PricingPlan">
                <FourthSection />
                <div className="ForthSec_Handle">
                    <Plans Heading="Free Plan" price="0" />
                    <Features feature="Community support" />
                    <Features feature="400+ pages" />
                    <Features feature="100+ header variations" />
                    <Button variant="light" style={{ background: "#75d3eb" }}>Get Started</Button><br />
                </div>
                <div className="ForthSec_Handle">
                    <Plans Heading="Individual Plan" price="22" />
                    <Features feature="Community support" />
                    <Features feature="400+ pages" />
                    <Features feature="100+ header variations" />
                    <Features feature="20+ home page options" />
                    <Button variant="light" style={{ background: "#75d3eb" }}>Get Started</Button><br />
                </div>
                <div className="ForthSec_Handle">
                    <Plans Heading="Enterprise Plan" price="99" />
                    <Features feature="24/7 support" />
                    <Features feature="400+ pages" />
                    <Features feature="200+ header variations" />
                    <Features feature="40+ home page options" />
                    <Features feature="E-commerce" />
                    <Button variant="light" style={{ background: "#75d3eb" }}>Get Started</Button><br />
                </div>
            </div>
            <div className="sixSection">
                <SixthSection MainPic={spidercamstadium29ae3d} extra="Spidercam" ProfilePic={janpeters7d72ce} name="Jan Peters" designation="CEO, Spidercam" Paragraph="spidercam® Producer uses AnyDesk Remote Desktop Tool for Worldwide Equipment Support." />
                <SixthSection MainPic={airportmuenster5ded7b} extra="Airport Münster" ProfilePic={janpeters7d72ce} name="Francisco Rodríguez" designation="CIO, Airport Münster/Osnabrück" Paragraph="It wasn't until we tried AnyDesk that we were able to solve the data security problem." />
                <SixthSection MainPic={aipinstitutec254e2} extra="Leibniz Institute" ProfilePic={janpeters7d72ce} name="Mario Dionies" designation="IT-Security Officer, AIP" Paragraph="After searching for a bit, we found AnyDesk with its in-house-solution, offering exactly what we were looking for." />
            </div>
            <SevenSection />
            <br /><br />
            <EightSection />
            {!this.state.User && <Redirect to={{ pathname: "/login" }} />}
        </div>

    }
}
