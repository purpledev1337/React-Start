import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "../UI/Card";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <button onClick={clickHandler}>Change Title</button>
                <div className="expense-item__price">€ {props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;