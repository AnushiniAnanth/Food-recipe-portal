import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { Link } from "react-router-dom";

import "./NavBar.css"; // Import the separate CSS

function NavBar() {
    return (
        <header className="navbar-header">
            <div className="navbar-overlay">
                <Link to="/" className="navbar-brand">
                    <FastfoodIcon className="navbar-icon" />
                    DineDaires
                </Link>
            </div>
        </header>
    );
}

export default NavBar;
