//This will be our root component (That is why it is not in the component folder)
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import {useState} from "react";

const INITIALDATA = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {

    const [expenses, setExpenses] = useState(INITIALDATA);

    function addExpenseHandler(expense){ //Lifting state up
        // setExpenses([expense, ...expenses]); Not really correct
        // Updating state based on the old snapshot of the state!! IMPORTANT BUT WHY?
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });

    }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses prop={expenses}  />
    </div>
  );
}

export default App;
