import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {

    return (
        <Card className='expenses'>
            <h2>Expense List</h2>
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