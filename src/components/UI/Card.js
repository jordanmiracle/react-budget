import React from 'react';
import '../UI/Card.css';


const Card = (props) => {
    const classes = 'card '+ props.className; // This is adding the card.js component plus the className passed in as a prop.
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;


