import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpence() {
    function onSaveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpence;