import React from "react";
import Icon from "@assets/icon.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card, Clock, Spacer, SocialMediaBar, Buttons } from "./components";

interface ContainerProps {
    children: React.ReactNode;
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<AppContents />}
                />
            </Routes>
        </BrowserRouter>
    );
};

const AppContents = () => (
    <AppContainer>
        <ContentContainer>
            {/* <Clouds /> */}

            <a href="https://www.youtube.com/watch?v=cDj2r8QEzzk" target="_blank" rel="noreferrer">
                <img className="icon" src={Icon} />
            </a>

            <Card>
                <Clock />
                <Spacer h={50} />
                <h1 className="title">HawkHacks 2024</h1>
                <p>Laurier | March 8th - 10th | Hybrid</p>
                <Spacer h={50} />

                <p style={{width: "300px", textAlign: "center", color: "var(--black)"}}>
                    {"We're coming back for another year! "}
                    <strong>{"Keep up to date with our newsletter below!"}</strong>
                    {" Wanna be a part of the team? "}
                    <strong>{"Check out our hiring page below!"}</strong>
                </p>

                <SocialMediaBar />
                <Buttons />
            </Card>
        </ContentContainer>

        <BackgroundContainer />
    </AppContainer>
);

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
