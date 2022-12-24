import "./Card.css"

function Card(props) { //This acts as a shell (so we don't have to replicate same css)

    const classes = 'card ' + props.className;
    console.log(classes)

    return(
      <div className={classes}>{props.children}</div> //Set it between the div
    );
}

export default Card;