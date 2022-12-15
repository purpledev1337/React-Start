import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={dummyExpenses[0].title}
        amount={dummyExpenses[0].amount}
        date={dummyExpenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={dummyExpenses[1].title}
        amount={dummyExpenses[1].amount}
        date={dummyExpenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={dummyExpenses[2].title}
        amount={dummyExpenses[2].amount}
        date={dummyExpenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={dummyExpenses[3].title}
        amount={dummyExpenses[3].amount}
        date={dummyExpenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
