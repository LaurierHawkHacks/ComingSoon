/* eslint-disable no-unused-vars */
import React from "react";
import Styled from "styled-components";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Icon from "./assets/icon.svg";
import config from "./config.json";

import validator from "validator";
import firebase from "firebase/app";
import "firebase/firestore";

import {
    RiDiscordLine as DiscordIcon,
    RiTwitterLine as TwitterIcon,
    RiInstagramLine as InstagramIcon,
    RiGithubLine as GithubIcon

} from "react-icons/ri";

import { FiFacebook as FacebookIcon } from "react-icons/fi";
import { breakpoints } from "./utils";

const ApplicationDiv = Styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const HawkHacksIcon = Styled.img`
    transition: all 0.25s ease;
    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
        cursor: pointer;

        animation-name:rotate;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes rotate{
            100%{
                transform:rotate(360deg);
            }
        }
    }
    
    width: 5rem;
    ${breakpoints("width", [{ 250: "4rem" }])}
        height: 5rem;
        ${breakpoints("height", [{ 250: "4rem" }])}
        margin: 3rem 0;
        ${breakpoints("margin", [{ 250: "2rem 0" }])}
`;

const PanelDiv = Styled.div`
    background: rgba(248, 248, 248, 1);
    color: #2F4858;
    text-align: center;
    border-radius: 1rem;
    height: max-content;
    width: max-content;
    ${breakpoints("width", [
        { 600: "22rem" },
        { 450: "20rem" },
        { 350: "calc(100vw - 2rem)" }
    ])};
        padding: 2rem 4rem;
        ${breakpoints("padding", [
        { 800: "2rem 3rem" },
        { 600: "2rem 2rem" },
        { 450: "1.6rem 1.2rem" },
        { 350: "1.2rem 0.6rem" }
    ])}
        margin-bottom: 1rem;
        position: relative;
        p {
        font-size: 1rem;
        ${breakpoints("font-size", [
        { 450: "0.9rem" },
        { 350: "0.82rem" },
        { 250: "0.8rem" }
    ])}
    }
`;

const PanelBackground = Styled.img`
    opacity: 0.14;
    position: absolute;
    left: 16%;
    top: 0;
    width: 70%;
    height: 100%;
    pointer-events: none;
`;

const SocialMediaDiv = Styled.div`
    display: flex;
    margin: 1.6rem 0;
    flex-direction: row;
    ${breakpoints("flex-direction", [
        { 300: "column" }
    ])}
`;

const SocialMediaIcon = Styled.img`
    color: #2F4858;
    margin: 0.8rem;
    width: 1.8rem;
    height: 1.8rem;

    transition: all 0.25s ease;
    :hover {
        transition: all 0.25s ease;
        filter: brightness(75%);
        width: 1.5rem;
    }
`;

const Title = Styled.h1`
    color: #0A6972;
    font-weight: 800;
    margin: 2rem 0 0 0;
    font-size: 2.2rem;
    ${breakpoints("font-size", [
        { 600: "2.2rem" },
        { 450: "1.8rem" },
        { 300: "1.4rem" },
        { 250: "1.1rem" }
    ])
}
`;

const Subtitle = Styled.h3`
    font-weight: 600;
    font-size: 1.2rem;
    ${breakpoints("font-size", [
        { 600: "1rem" },
        { 300: "0.9rem" },
        { 250: "0.8rem" }
    ])}
    margin: 0.4rem 0 1.2rem 0;
`;

const ClockPiece = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0.12rem;
    flex-grow: 1;
    color: #30292F;
    h4 {
    font-size: 1.35rem;
    ${breakpoints("font-size", [
        { 300: "1rem" },
        { 250: "0.9rem" }
    ])}
    margin: 0;
    }
    p {
    font-size: 0.75rem;
    ${breakpoints("font-size", [
        { 300: "0.6rem" },
        { 250: "0.56rem" }
    ])}
    margin: 0;
    }
`;

const ClockDivider = Styled.div`
    border-left: 2px solid #30292F;
`;

const SpaceFillerDiv = Styled.div`
    flex-grow: 1;
`;

const FormInput = Styled.input`
    background-color: white;
    border: 0;
    border-radius: 0.8rem;
    font-size: 1rem;
    ${breakpoints("font-size", [
        { 450: "0.9rem" },
        { 300: "0.84rem" },
        { 250: "0.8rem" }
    ])}
    padding: 0.6rem;
    margin: 0.2rem 0;
`;

const FormButton = Styled.button`
    color: white;
    background-color: #0FA3B1;
    border: 0;
    border-radius: 0.8rem;
    font-size: 1rem;
    ${breakpoints("font-size", [
        { 450: "0.9rem" },
        { 300: "0.84rem" },
        { 250: "0.8rem" }
    ])}

    padding: 0.6rem 1.2rem;
    margin: 0.8rem 0 0.4rem 0;
    flex-grow: 1;
    transition: all 0.25s ease;

    :hover {
        transition: all 0.25s ease;
        cursor: pointer;
        filter: brightness(85%) drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.28));
    }
`;

const FormMessage = Styled.p`
    margin: 1.2rem 0 0 0;
    color: #2F4858;
    transition: 1;
`;

const FormInputDiv = Styled.div`
    display: flex;
    flex-direction: row;
    ${breakpoints("flex-direction", [
        { 450: "column" }
    ])}
    marginTop: 2rem;
`;

if (firebase.apps.length === 0) {
    firebase.initializeApp(config.firebaseConfig);
}

let firestore = firebase.firestore();

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.Toggle = this.Toggle.bind(this);
        this.SaveContact = this.SaveContact.bind(this);
        this.invalidEmail = this.invalidEmail.bind(this);
        this.state = {
            visibility: false
        };
        this.state = {
            message: "Thank you for subscribing!"
        };
    }

    Toggle() {
        this.setState(() => {
            return {
                visibility: true,
            };
        });
    }
    invalidEmail() {
        this.setState(() => {
            return {
                message: "Invalid email, please try again!"
            };
        });
    }
    SaveContact(e) {
        e.preventDefault();

        let name = e.target.elements.Name.value;
        let email = e.target.elements.Email.value.trim();

        if (validator.isEmail(email)) {
            fetch(`/api/memberAdd?email=${email}`);//.then(res.json()).then(res=> console.log(res)).catch(error=> console.log(error))
            firestore.collection("Contacts").add({
                name: name,
                email: email
            })
                .then(
                    this.setState({ message: "Thank you for subscribing!", visibility: true }))
                .then(
                    setInterval(() => this.setState({ visibility: false }),
                        5000)
                );
        } else {
            this.invalidEmail();
        }

        document.getElementById("form").reset();
    }

    render() {
        return (
            <div id="mc_embed_signup">
                <form action="https://hawkhacks.us6.list-manage.com/subscribe/post?u=26e2afc1662a30dadf0c725af&id=050d487d87" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <h2>Newsletter</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>

                        <div className="mc-field-group">
                            <FormInput type="text" placeholder="*Name" name="MMERGE1" className id="mce-MMERGE1" />
                        </div>

                        <div className="mc-field-group">
                            <FormInput type="email" placeholder="*Email" name="EMAIL" className="required email" id="mce-EMAIL" />
                        </div>

                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: "none" }} />
                            <div className="response" id="mce-success-response" style={{ display: "none" }} />
                        </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_26e2afc1662a30dadf0c725af_050d487d87" tabIndex={-1} defaultValue /></div>

                        <div className="optionalParent">
                            <div className="clear foot">
                                <FormButton type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe!</FormButton>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

class SocialMediaBar extends React.Component {
    render() {
        return (
            <SocialMediaDiv>
                <a href="https://discord.gg/z8XbEEXkqN" target="_blank" rel="noreferrer"><SocialMediaIcon as={DiscordIcon} alt="Discord Icon" /></a>
                <a href="" target="" rel="noreferrer"><SocialMediaIcon as={FacebookIcon} alt="Facebook Icon" /></a>
                <a href="https://twitter.com/wluhawkhacks" target="_blank" rel="noreferrer"><SocialMediaIcon as={TwitterIcon} alt="Twitter Icon" /></a>
                <a href="https://www.instagram.com/wluhawkhacks/" target="_blank" rel="noreferrer"><SocialMediaIcon as={InstagramIcon} alt="Instagram Icon" /></a>
                <a href="https://github.com/LaurierHawkHacks" target="_blank" rel="noreferrer"><SocialMediaIcon as={GithubIcon} alt="Github Icon" /></a>
            </SocialMediaDiv>
        );
    }
}

class ClockWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }
    render() {
        const hackathonStartTime = 1652414400000; // use currentmillis.com to find this number
        const countdown = hackathonStartTime - this.state.date;
        const days = (countdown - (countdown % 86400000)) / 86400000;
        const hours = ((countdown % 86400000) - (countdown % 3600000)) / 3600000;
        const minutes = ((countdown % 3600000) - (countdown % 60000)) / 60000;
        const seconds = ((countdown % 60000) - (countdown % 1000)) / 1000;

        return (
            <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <ClockPiece>
                    <h4>{days}</h4>
                    <p>DAYS</p>
                </ClockPiece>
                <ClockDivider />
                <ClockPiece>
                    <h4>{hours}</h4>
                    <p>HRS</p>
                </ClockPiece>
                <ClockDivider />
                <ClockPiece>
                    <h4>{minutes}</h4>
                    <p>MINS</p>
                </ClockPiece>
                <ClockDivider />
                <ClockPiece>
                    <h4>{seconds}</h4>
                    <p>SECS</p>
                </ClockPiece>
            </div>
        );
    }
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <ApplicationDiv className="App">
                        <a href="/">
                            <HawkHacksIcon src={Icon} alt="HawkHacks Icon" />
                        </a>

                        <a
                            id="mlh-trust-badge"
                            style={{
                                display: "block",
                                maxWidth: "100px",
                                minWidth: "60px",
                                position: "fixed",
                                right: "50px",
                                top: 0,
                                width: "10%",
                                zIndex: 10000
                            }}
                            href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=blue"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-blue.svg"
                                alt="Major League Hacking 2022 Hackathon Season"
                                style={{ width: "100%" }}
                            />
                        </a>

                        <SpaceFillerDiv />
                        <PanelDiv className="dropshadow-large">
                            <PanelBackground src={Icon} />
                            <ClockWidget />
                            <Title>HawkHacks 2022</Title>
                            <Subtitle>Laurier | Virtual</Subtitle>
                            <p style={{ marginBottom: "0" }}>
                                We&apos;re currently working on something exciting!<br />
                                Be notified when applications open:
                            </p>
                            <MyForm />
                        </PanelDiv>
                        <SpaceFillerDiv />
                        <SocialMediaBar />
                    </ApplicationDiv>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;