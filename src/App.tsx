import React from "react";
import PropTypes from "prop-types";
import Icon from "@assets/icon.svg";
import { Card, Clock, Spacer, Subscribe, SocialMediaBar } from "./components";

interface ContainerProps {
    children: React.ReactNode;
}

const App = () => {
    return (
        <AppContainer>
            <ContentContainer>
                <a href="https://youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                    <img className="icon" src={Icon} />
                </a>

                <Spacer h={50} />

                <Card>
                    <Clock />
                    <Spacer h={50} />
                    <h1 className="title">HawkHacks 2024</h1>
                    <p>Laurier | In-Person & Online</p>
                    <Spacer h={50} />

                    {/* <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}> */}
                    <p style={{width: "300px", textAlign: "center", color: "var(--black)"}}>
                        {"We're coming back for another year! Check back in a bit for more information and details about what's to come."}
                    </p>
                    {/* <Spacer w={10} /> */}
                    {/* <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> */}
                    {/* <h3>Subscribe</h3> */}
                    {/* <button>Subscribe</button> */}
                    {/* </div> */}
                    {/* </div> */}

                    <SocialMediaBar />
                </Card>
            </ContentContainer>

            <BackgroundContainer />
        </AppContainer>
    );
};

const AppContainer = ({children}: ContainerProps) => (
    <div className="app-container">
        {children}
    </div>
);

const ContentContainer = ({children}: ContainerProps) => (
    <div className="content-container">
        {children}
    </div>
);

const BackgroundContainer = () => (
    <div className="background-container" />
);

export default App;
