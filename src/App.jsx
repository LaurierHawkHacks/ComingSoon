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
    color: #2F4858;
    text-align: center;
    background: rgba(250, 250, 250, 1);
    border-radius: 1rem;
    width: max-content;
    height: max-content;
    padding: 2rem;
    position: relative;
`;

/*const PanelBackground = Styled.img`
    opacity: 0.18;
    position: absolute;
    left: 15%;
    top: 0;
    width: auto;
    height: 100%;
`;*/

const SocialMediaDiv = Styled.div`
    display: flex;
`;

const SocialMediaIcon = Styled.img`
    color: #2F4858;
    margin: 0.8rem;
    width: 1.8rem;
    height: 1.8rem;
`;

const Title = Styled.h1`
    color: #0A6972;
    font-weight: bold;
`;

if (firebase.apps.length === 0) {
    firebase.initializeApp(config.firebaseConfig);
}

let firestore = firebase.firestore();

class MyForm extends React.Component {
   
    constructor(props){
        super(props);
        this.Toggle= this.Toggle.bind(this);
        this.SaveContact = this.SaveContact.bind(this);
        this.invalidEmail = this.invalidEmail.bind(this);
        this.state = {
            visibility: false
        };
        this.state={
            message: "Submition Successfull"
        };
    }
    Toggle(){
        this.setState(()=>{
            return{
                visibility: true
                
            };
        });
    }
    invalidEmail(){
        this.setState(()=>{
            return{
                message: "Invalid email, please try again!"
            };
        });
    }
    SaveContact(e){
        e.preventDefault();

        let name = e.target.elements.Name.value;
        let email = e.target.elements.Email.value.trim();
        

        if(validator.isEmail(email)){
            firestore.collection("Contacts").add({
                name: name,
                email: email
            });
        }else{
            this.invalidEmail();
        }
        
        

        document.getElementById("form").reset();

      
    }
    
    render(){
        return (
            <form onSubmit={this.SaveContact} id="form">
          
                <p style={{color: "Aquamarine"}}>Subscribe here:</p>
                <input
                    type="text"
                    placeholder="name"
                    name="Name"
                />
                <br/>
                <input
                    type="text"
                    placeholder="email"
                    name="Email"
                />
            
                <br/>
                <br/>
                <button onClick={this.Toggle} style={{position:"relative"}}> Submit </button>
                {this.state.visibility && <p style={{color: "Aquamarine"}}>{this.state.message}</p>}
            </form>
        );
    }
}

class SocialMediaBar extends React.Component {
    render() {
        return (
            <SocialMediaDiv>
                <SocialMediaIcon as={DiscordIcon} alt="Discord Icon" />
                <SocialMediaIcon as={FacebookIcon} alt="Facebook Icon"  />
                <SocialMediaIcon as={TwitterIcon} alt="Twitter Icon"  />
                <SocialMediaIcon as={InstagramIcon} alt="Instagram Icon"  />
                <SocialMediaIcon as={GithubIcon} alt="Github Icon"  />
            </SocialMediaDiv>
        );
    }
}

function App() {
    
    return (
        <ApplicationDiv className="App">
            <HawkHacksIcon src={Icon} alt="HawkHacks Icon" />
            <PanelDiv className="dropshadow">
                {/*<PanelBackground src={Icon} />*/}
                <Title>HawkHacks 2022</Title>
                <h3>Laurier | On Campus and Virtual | xxxxx xx-xx</h3>
                <p>
                    We&apos;re currently working on something exciting!<br />
                    Be notified when applications open.
                </p>
                <MyForm/>
            </PanelDiv>
            <SocialMediaBar style={{marginTop: "auto"}} />
        </ApplicationDiv>
    );
}

export default App;
