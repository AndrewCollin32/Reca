// A component in react is literally a javascript function
// Import CSS file
import React, { useState } from 'react'; //Must import like this

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) { //react will only get one parameter
    const expenseAmount = props.amount;

    const [title, setTitle] = useState(props.title); //React hook (for changing the state) MUST BE CALLED IN COMPONENT FUNCTIONS
    //React.useState() works too!
    //Splits the title to two, title: the default value, setTitle: the function to change the title

    function clickFunction() {
        setTitle("Change Title");
    }


    return ( //USE () not {} )
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
            <button onClick={clickFunction}>Change Title</button>
            {/*Don't ever put () on the function, otherwise it will execute automatically when the program runs*/}
        </Card>
    )
}

export default ExpenseItem;
//Export the function out of this js file