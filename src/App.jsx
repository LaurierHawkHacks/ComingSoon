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
    height: 5rem;
    margin: 3rem 0;
`;

const PanelDiv = Styled.div`
    background: rgba(248, 248, 248, 1);
    color: #2F4858;
    text-align: center;
    border-radius: 1rem;
    width: max-content;
    height: max-content;
    padding: 2rem 4rem;
    margin-bottom: 2rem;
    position: relative;
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
    margin-bottom: 1rem;
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
    margin: 2.2rem 0 0 0;
    font-size: 2.2rem;
`;

const Subtitle = Styled.h3`
    font-weight: 600;  
`;

const ClockPiece = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem; 
    flex-grow: 1;
    color: #30292F;
    h4 {
        font-size: 1.35rem;
        margin: 0;
    }
    p {
        font-size: 0.75rem;
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
    padding: 0.6rem;
    margin: 0.2rem 0.4rem 0.2rem 0;
`;

const FormButton = Styled.button`
    color: white;
    background-color: #0FA3B1;
    border: 0;
    border-radius: 0.8rem;
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    margin: 0.2rem 0 0.2rem 0.4rem;
    flex-grow: 1;
`;

const FormMessage = Styled.p`
    margin: 1.2rem 0 0 0;
    color: #2F4858;
    transition: 1;
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
                <div style={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}>
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
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <FormButton onClick={this.Toggle} className="dropshadow">Sign Up</FormButton>
                    </div>
                </div>
                {this.state.visibility && <FormMessage>{this.state.message}</FormMessage>}
            </form >
        );
    }
}

class SocialMediaBar extends React.Component {
    render() {
        return (
            <SocialMediaDiv>
                <SocialMediaIcon as={DiscordIcon} alt="Discord Icon" />
                <SocialMediaIcon as={FacebookIcon} alt="Facebook Icon" />
                <SocialMediaIcon as={TwitterIcon} alt="Twitter Icon" />
                <SocialMediaIcon as={InstagramIcon} alt="Instagram Icon" />
                <SocialMediaIcon as={GithubIcon} alt="Github Icon" />
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
                <Subtitle>Laurier | On Campus and Virtual | xxxxx xx-xx</Subtitle>
                <p>
                    We&apos;re currently working on something exciting!<br />
                    Be notified when applications open.
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
