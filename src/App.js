import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpence from "./components/NewExpense/NewExpense";

function App() {

  const dummyExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
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

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    // checking if the expense object is empty
    if (expense.title === '' || expense.amount === '' || isNaN(expense.date.getDate()) || isNaN(expense.date.getMonth()) || isNaN(expense.date.getFullYear())) {
      console.log('Incorrect input data!')
      return;
    }

    setExpenses((prevExpenses) => {
      // array concatenation with spread operator
      return [expense, ...prevExpenses];
    });
  };

  // reordering the expenses array by date
  expenses.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });

  return (
    <div>
        <NewExpence onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </div>
  );
}

export default App;
