import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.prop[0].title} amount={props.prop[0].amount} date={props.prop[0].date} />
            <ExpenseItem title={props.prop[1].title} amount={props.prop[1].amount} date={props.prop[1].date} />
            <ExpenseItem title={props.prop[2].title} amount={props.prop[2].amount} date={props.prop[2].date} />
        </Card>
    );
}

export default Expenses;