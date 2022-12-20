import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpence(props) {

    const [isEditing, editingState] = useState(false);

    function onSaveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    function startEditingHandler() {
        editingState(true);
    };

    function stopEditingHandler() {
        editingState(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onHideForm={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>
    )
    
}

export default NewExpence;