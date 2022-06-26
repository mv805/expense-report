
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItem
                title={ props['expense-list'][0].title }
                amount={ props['expense-list'][0].amount }
                date={ props['expense-list'][0].date } />
            <ExpenseItem
                title={ props['expense-list'][1].title }
                amount={ props['expense-list'][1].amount }
                date={ props['expense-list'][1].date } />
            <ExpenseItem
                title={ props['expense-list'][2].title }
                amount={ props['expense-list'][2].amount }
                date={ props['expense-list'][2].date } />
            <ExpenseItem
                title={ props['expense-list'][3].title }
                amount={ props['expense-list'][3].amount }
                date={ props['expense-list'][3].date } />
        </Card>
    );

}

export default Expenses;

/* <ExpenseItem
                title={ props[1].title }
                amount={ props[1].amount }
                date={ props[1].date } />
            <ExpenseItem
                title={ props[2].title }
                amount={ props[2].amount }
                date={ props[2].date } /> */