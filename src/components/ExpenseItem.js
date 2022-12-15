import './ExpenseItem.css';

function ExpenseItem(props) {

    const month = props.date.toLocaleString('en-EU', { month: 'long' });
    const day = props.date.toLocaleString('en-EU', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div className="expense-item__day">{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">€ {props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;