import React from "react";

function Card(props){
    return(
        <>
        <div className="card">
            <img src={props.imageUrl} />

            <div className="card--main">
                <div className="card--info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Map_pin_icon.svg/1200px-Map_pin_icon.svg.png" className="card--pin"/>
                    <span className="card--location upper-case">{props.location}</span>
                    <span className="card--google">View on Google Maps</span>
                </div>

                <h1 className="card--title">{props.title}</h1>
                <span className="card--date">{props.startDate} - {props.endDate}</span>
                <p className="card--text">{props.description}</p>
            </div>
        </div>
        <div className="border"></div>
        </>
    )
}

export default Card;