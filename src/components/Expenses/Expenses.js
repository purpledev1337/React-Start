import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    function readFilterValue(value) {
        
        console.log(value);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter onDropDownChange={readFilterValue} />
            {props.items.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}>
                </ExpenseItem>
            })}
        </Card>
    )
}

export default Expenses;