import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    function saveExpenseDataHandler(enteredExpenseData){ //Passing a pointer into ExpenseForm
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData); //Lifting state up to app.js
        console.log(expenseData)
    };
    return (
        <div className={"new-expense"}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;