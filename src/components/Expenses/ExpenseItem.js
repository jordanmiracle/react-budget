import '../Expenses/ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import '../Expenses/ExpenseDate.css';
import Card from '../UI/Card';
import React, { useState } from 'react';

   
const ExpenseItem = (props) => {
    // function ExpenseItem(e) { // This is the function that will be called when the button is clicked. This is simply another syntax for the function started above.
    const [title, setTitle] = useState(props.title); // This is the state that will be used to store the title of the expense.

    const clickHandler = () => {  // This is the function that will be called when the button is clicked.
        setTitle('Updated Title');
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>  {/* This is the syntax for calling the function that was created above. */}
        </Card>
    );
}

export default ExpenseItem;