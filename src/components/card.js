import React from "react";
import '../index.css';
import star from "../images/star.png"



export default function Card(props) {
    // card badge logic
    let badgeText 
     if (props.card.openSpots === 0) {
        badgeText = "Sold Out"
     } else if (props.card.location === "Online") {
        badgeText = "Online"
     }
    

    return (
        <div className="card-array relative pr-6 flex flex-row md:pr-12 ">
            {/* card badge */}
            {badgeText &&
                <div className="card-badge absolute my-2 mx-3 bg-slate-200 py-1 px-2 rounded">
                    <h3 className="badge-text text-xs font-bold uppercase">{badgeText}</h3> 
                </div>
            }
            {/* card badge end */}

            <div className="card w-56">
                <div className="card-image-container object-contain">
                    <img className="card-image rounded-lg" src = {require(`../images/${props.card.coverImg}`)}/>
                </div>
                <div className="card-info py-2 md:py-3">
                    <div className="card-stats flex items-center">
                        <img src = {star} alt="Star Image" className="pr-1 w-5 h-3 md:w-7 md:pr-2 md:h-4"/>
                        <p className="text-sm md:text-base font-semibold">{props.card.counts} <span className="text-sm text-slate-400">({props.card.stats.rating}) - {props.card.location}</span></p>
                    </div>
                    <p className="card-title text-sm py-1 text-left font-semibold md:text-base">{props.card.title}</p>
                    <p className="text-sm text-left font-normal md:text-base">From <span className="text-sm font-semibold md:text-base">${props.card.price}</span> / Person</p>
                </div>
            </div>
            
        </div>
        
    )
}