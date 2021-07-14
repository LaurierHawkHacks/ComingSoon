import React from "react";
import Styled from "styled-components";
import Logo from "./assets/logo_black.svg";

const ApplicationDiv = Styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;

const HawkHacksLogo = Styled.img`
    transition: all 0.25s ease;
    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;

function App() {
    return (
        <ApplicationDiv className="App">
            <HawkHacksLogo src={Logo} />
        </ApplicationDiv>
    );
}

export default App;
