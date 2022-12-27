import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm(props){
    //USE THIS ONE, IT IS MORE POPULAR
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //You can use one state instead
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });
    function titleChangeHandler(event) {
        // setUserInput({enteredTitle: event.target.value}); //THIS WILL DUMP THE OTHER KEYS
        //This can also work (BUT HAS INCONSISTENT UPDATES
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        //THIS will also work!
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });
        setEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event){
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
        setEnteredDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault(); //IMPORTANT: When you click on Add expense, it submits the form which reloads the entire page.
        //We don't want to do that, that is why we call this function!

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);

        props.onSaveExpenseData(expenseData); //This will execute the function from NewExpense.js (Communicate with parent)

        //Resets the form
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
      <form onSubmit={submitHandler}>
          <div className={"new-expense__controls"}>
              <div className={"new-expense__control"}>
                  <label>Title</label>
                  <input type={'text'} value={enteredTitle} onChange={titleChangeHandler} />
              </div>
              <div className={"new-expense__control"}>
                  <label>Amount</label>
                  <input type={'number'} min={"0.01"} step={"0.01"} value={enteredAmount} onChange={amountChangeHandler} />
              </div>
              <div className={"new-expense__control"}>
                  <label>Date</label>
                  <input type={'date'} min={"2019-01-01"} max={"2022-12-31"} value={enteredDate} onChange={dateChangeHandler} />
              </div>
          </div>
          <div className={"new-expense__actions"}>
              <button type={"submit"}>Add Expense</button>
          </div>
      </form>
    );
}
export default ExpenseForm;