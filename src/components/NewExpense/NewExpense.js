import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {

    let idCounter = 0;
    let idValue;

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: getID(),
        };

        props.onAddExpense(expenseData);
    };

    const getID = () => {

        idCounter++;
        idValue = `e${ idCounter }`;
        return idValue;

    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
        </div>
    );

};


export default NewExpense;