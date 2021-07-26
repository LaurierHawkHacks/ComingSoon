import React from "react";
import Styled from "styled-components";
import Icon from "./assets/icon.svg";
import firebase from "firebase/app";
import "firebase/firestore";

import config from "./config.json";
import validator from "validator";

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
    }
    width: 5rem;
    ${breakpoints("width", [
        { 250: "4rem" }
    ])}
    height: 5rem;
    ${breakpoints("height", [
        { 250: "4rem" }
    ])}
    margin: 3rem 0;
    ${breakpoints("margin", [
        { 250: "2rem 0"}
    ])}
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
    margin-bottom: 2rem;
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
    left: 15%;
    top: 0;
    width: 70%;
    height: 100%;
    pointer-events: none;
`;

const SocialMediaDiv = Styled.div`
    display: flex;
    margin-bottom: 1.6rem;
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
    ])}
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
                visibility: true
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
            <form onSubmit={this.SaveContact} id="form">
                {/*<p style={{ color: "lightseagreen", fontWeight: "bold" }}>Subscribe here:</p>*/}
                <FormInputDiv style={{ marginTop: "1.2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        <FormInput
                            type="text"
                            placeholder="Name"
                            name="Name"
                            className="dropshadow"
                        />
                        <FormInput
                            type="text"
                            placeholder="Email Address"
                            name="Email"
                            className="dropshadow"
                        />
                        <FormButton onClick={this.Toggle} className="dropshadow">Sign Up</FormButton>
                    </div>
                </FormInputDiv>
                {this.state.visibility && <FormMessage>{this.state.message}</FormMessage>}
            </form >
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
                <a href="https://www.instagram.com/wluhawkhacks/" target="_blank" rel="noreferrer"><SocialMediaIcon as={InstagramIcon} alt="Instagram Icon"/></a>
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
        const hackathonStartTime = 1641531600000; // use currentmillis.com to find this number
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
        <ApplicationDiv className="App">
            <HawkHacksIcon src={Icon} alt="HawkHacks Icon" />
            <PanelDiv className="dropshadow-large">
                <PanelBackground src={Icon} />
                <ClockWidget />
                <Title>HawkHacks 2022</Title>
                <Subtitle>Laurier | On-Campus and Virtual</Subtitle>
                <p style={{ marginBottom: "0" }}>
                    We&apos;re currently working on something exciting!<br />
                    Be notified when applications open:
                </p>
                <MyForm />
            </PanelDiv>
            <SpaceFillerDiv />
            <SocialMediaBar />
        </ApplicationDiv>
    );
}

export default App;

const NEXT_EVENT_YEAR = 2021;
const NEXT_EVENT_MONTH = 8;
const NEXT_EVENT_DAY = 25;
const NEXT_EVENT_HOUR = 0;

const NEXT_EVENT_DATE = new Date(NEXT_EVENT_YEAR, NEXT_EVENT_MONTH, NEXT_EVENT_DAY, NEXT_EVENT_HOUR, 0, 0, 0);

// eslint-disable-next-line no-unused-vars
function getTimeLeft() {
    let timeLeft = new Date(NEXT_EVENT_DATE - new Date());
    let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
    timeLeft %= (24 * 60 * 60 * 1000);

    let hours = Math.floor(timeLeft / (60 * 60 * 1000));
    timeLeft %= (60 * 60 * 1000);

    let minutes = Math.floor(timeLeft / (60 * 1000));
    timeLeft %= (60 * 1000);

    let seconds = Math.floor(timeLeft / 1000);
    return { "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };

}
