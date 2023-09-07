import React from "react";
import "../css/Navbar.css";
import "../css/index.css";
import HomeIcon from "../images/home.png";

export default function Navbar() {
    return (
        <nav class="nav-bar">
            <h1 class="nav-title">
                <a href="landing-page">
                    <img class="place-icon" src={HomeIcon} alt="Place Icon" />
                </a>
            </h1>

            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <ul class="menu">
                <li class="nav-item"><a href="index">Home</a></li>
                <li class="nav-item"><a href="services">Services</a></li>
                <li class="nav-item"><a href="specialities">Specialities</a></li>
                <li class="nav-item dropdown">
                    <a href="#" class="dropbtn">AI solutions</a>
                    <div class="dropdown-content">
                        <a href="diagnostic-depart">Diagnostics</a>
                        <a href="chatbot">Chat Bot</a>
                    </div>
                </li>
                <li class="nav-item"><a href="register">Register</a></li>
                <li class="nav-item"><a href="signin">Login</a></li>
            </ul>
        </nav>
    );
}