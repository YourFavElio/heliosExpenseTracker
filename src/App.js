import React from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import IncomeExpense from "./components/IncomeExpenses.jsx";
import Transactionlist from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactionlist/>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
