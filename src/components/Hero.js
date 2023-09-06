import React from "react";
import ReactDOM from "react-dom";
import hero from "../images/photo-grid.png"
import '../index.css';


export default function Hero() {
    return (
        <div className="Hero py-8 mt-20 mb-5">
            <img src = {hero} alt="airbnb Hero Photogrid" className="h-64 w-screen md:h-80 lg:h-2/3"/>
            <h1 className="text-3xl font-bold tracking-normal text-left mt-14 text-gray-800 md:text-5xl md:leading-10">
                Online Experiences
            </h1>
            <p className="text-lg mt-4 text-left md:text-xl md:w-1/2 md:mt-8">
                Join a unique interactive activites led by one-off-a-kind host-all without leaving your home
            </p>
        </div>
    )
}