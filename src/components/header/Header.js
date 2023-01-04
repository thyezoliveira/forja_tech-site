import React from "react";
import Logo from '../logo/Logo'
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
        <>
            <header className="header">
                <Logo />
                <h1>ForjaTech</h1>
            </header>
        </>
        )
    }
}