// A component in react is literally a javascript function
// Import CSS file
import React, { useState } from 'react'; //Must import like this
//You can use React.useState() too!
//A STATELESS COMPONENT because no useState
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) { //react will only get one parameter
    const expenseAmount = props.amount;
    return ( //USE () not {} )
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
            {/*Don't ever put () on the function, otherwise it will execute automatically when the program runs*/}
        </Card>
    )
}

export default ExpenseItem;
//Export the function out of this js file