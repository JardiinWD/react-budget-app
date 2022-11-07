import React from 'react'
import Header from './components/Header'; // Header Component
import Balance from './components/Balance'; // Balance Component
import AddTransaction from './components/AddTransaction'; // Transaction Component
import IncomeList from './components/IncomeList'; // IncomeList Component
import ExpenseList from './components/ExpenseList'; // ExpenseList Component
//TODO(1) Import the globalcontextprovider
import { GlobalContextProvider } from './context/GlobalState'; // Import the provider
import './App.css';

function App() {
  return (
    //TODO(2) Wrap the App container between the GlobalContext tag
    <GlobalContextProvider>
      {/* container */}
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
    </GlobalContextProvider>

  );
}

export default App;
