import React from "react";
import ReactDOM from "react-dom";
import logo from "../images/airbnb-logo.png"
import '../index.css';


export default function Header() {
    return (
        <div className="Header flex items-center h-16 shadow-md bg-white fixed top-0 left-0 right-0">
            <img src = {logo} alt="airbnb logo" className="w-30 h-9 ml-6 p-0 absolute md:ml-8"/>
        </div>
    )
}