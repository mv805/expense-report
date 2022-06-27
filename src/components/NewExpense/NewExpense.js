import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import idGenerator from '../../utilities/id-generator';

const idGen = idGenerator();

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: idGen.getID(),
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
        </div>
    );

};


export default NewExpense;