import Expenses from './components/expenses/Expenses';
import './App.css';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.99,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 594.12,
      date: new Date(2021, 2, 28),
    }
  ];

  return (
    <div className='App'>
      <h2>Lets get Started</h2>
      <Expenses expense-list={ expenses } />
    </div>
  );

}

export default App;
