
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filteredExpenses = props.expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={ filteredYear } onChangeFilter={ filterChangeHandler } />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={ filteredExpenses } />
        </Card>
    );

}

export default Expenses;
