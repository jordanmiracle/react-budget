import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">{}</div>
            <div>
                <h2>{props.title}</h2>

                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;