import React from "react";
import Styled from "styled-components";
import Logo from "./assets/logo_black.svg";
import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config.json";
import validator from "validator";

const ApplicationDiv = Styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const HawkHacksLogo = Styled.img`
    transition: all 0.25s ease;
    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;

firebase.initializeApp(config.firebaseConfig);

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

function App() {
    
    return (
        <ApplicationDiv className="App">
            <HawkHacksLogo src={Logo} />
            <MyForm/>
        </ApplicationDiv>
    );
}

export default App;
