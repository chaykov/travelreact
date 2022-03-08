import React from "react";
import Card from "./Card";
import data from "../data"

function Section(){
    const cards = data.map(item => {
        return(
        <Card 
            key={item.id}
            {...item}
        />
        )
    })

    return(
        <section className="container">
            {cards}
        </section>
    )
}

export default Section;