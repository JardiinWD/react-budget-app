import React from 'react'
import Header from './components/Header'; // Header Component
import Balance from './components/Balance'; // Balance Component
import AddTransaction from './components/AddTransaction'; // Transaction Component
import IncomeList from './components/IncomeList'; // IncomeList Component
import ExpenseList from './components/ExpenseList'; // ExpenseList Component
import './App.css';

function App() {
  return (
    /* container */
    <div className="container">
      {/* app-wrapper */}
      <div className='app-wrapper'>
        {/* Header */}
        <Header />
        {/* Balance */}
        <Balance />
        {/* AddTransaction */}
        <AddTransaction />
        {/* IncomeList */}
        <IncomeList />
        {/* ExpenseList */}
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
