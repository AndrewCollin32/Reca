import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import {useState} from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredExpenses = props.prop.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>
                ))}
            </Card>
        </div>
    );
}

export default Expenses;