import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Cv from './Cv'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Body = (props) => {

    return (
        <>
            {props.showWindow === "H" &&
                <Home vdarkMode={props.vdarkMode} />}

            {props.showWindow === "A" &&
                <About vdarkMode={props.vdarkMode} />}

            {props.showWindow === "C" &&
                <Cv vdarkMode={props.vdarkMode} />}

            {props.showWindow === "O" &&
                <Contact vdarkMode={props.vdarkMode} />}

        </>
    )
}

export default Body