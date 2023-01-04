import React from "react";
import logoImg from "./logo.png"
import "./Logo.css"

export default class Logo extends React.Component {
    render() {
        return (
        <>
            <img className="logo" src={logoImg} alt="..."></img>
        </>
        )
    }
}