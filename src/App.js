import React, { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import FinancialSummary from "./components/FinancialSummary";
import "./App.css";

function App() {
	const [transactions, setTransactions] = useState([]);

	// create a function to add a new transaction to the transaction array. it takes a transaction object as a parameter
	const addTransaction = (transaction) => {
		setTransactions((prevTransactions) => [...prevTransactions, transaction]);
	};

	// render this file
	return (
		<div className="App">
			<h2>🏦 Budget Tracker App</h2>
			<TransactionForm onAddTransaction={addTransaction}></TransactionForm>
			<FinancialSummary transaction={transactions}></FinancialSummary>
			<TransactionList transactions={transactions}></TransactionList>
		</div>
	);
}

export default App;
