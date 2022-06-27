import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const [activeState, setActiveState] = useState(false);

    const fieldChangeHandler = (e, field) => {

        setUserInput((prevState) => {

            return {
                ...prevState,
                [field]: e.target.value,
            };
        });

    };

    const clearInputs = () => {

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });

    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        clearInputs();
        setActiveState(false);
    };

    if (!activeState) {
        return (
            <form onSubmit={ submitHandler }>
                <div className="new-expense__actions">
                    <button type="button" onClick={ () => {
                        setActiveState(true);
                    } }>Add New Expense</button>
                </div>
            </form>
        );
    }

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={ userInput.enteredTitle } onChange={ (e) => {
                        fieldChangeHandler(e, 'enteredTitle');
                    } } />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={ userInput.enteredAmount } onChange={ (e) => {
                        fieldChangeHandler(e, 'enteredAmount');
                    } } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={ userInput.enteredDate } onChange={ (e) => {
                        fieldChangeHandler(e, 'enteredDate');
                    } } />
                </div>
            </div>
            <div className="new-expense__actions-active">
                <button type="button" onClick={ () => {
                setActiveState(false)} }>Cancel</button>
                <button type="submit" onClick={submitHandler}>Add Expense</button>
            </div>
        </form>
    );



};


export default ExpenseForm;