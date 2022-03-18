import './Card.css'

function Card(props) {
    const classes = 'card '+ props.className; // This is adding the card.js component plus.
    
    return <div className={classes}>{props.children}</div>;
}

export default Card;


