import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpence(props) {

    const [insertNewExpense, setInsertNewExpense] = useState(false);

    function onSaveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    function insertNewExpenseHandler() {
        setInsertNewExpense(true);
    };

    function onHideFormHandler() {
        setInsertNewExpense(false);
    };

    if (insertNewExpense) {

        return (
            <div className="new-expense">
                <ExpenseForm onHideForm={onHideFormHandler} onSaveExpenseData={onSaveExpenseDataHandler} />
            </div>
        )
    }

    else {

        return (
            <div className="new-expense">
                <button onClick={insertNewExpenseHandler}>Add New Expense</button>
            </div>
        )
    }
}

export default NewExpence;