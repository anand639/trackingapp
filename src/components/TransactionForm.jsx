import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
	// Creation of Hooks for managing  state and event that is going to input by the user
	const [text, setText] = useState("");
	const [amount, setAmount] = useState("");
	const [type, setType] = useState("income");
	// handle form submission, prevent any default submission/behaviour and user will enter the the details then rest the form field
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddTransaction({
			id: Date.now(), // unique id generated based on time
			text,
			amount: parseFloat(amount),
			type,
		});
		setText("");
		setAmount("");
		setType("income");
	};
	// render the form infront of USer  with all the fields like description, amount, type
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Description"
				required
			/>
			<input
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				placeholder="Enter the Amount"
				required
			/>
			<div>
				{/* income or expense ?? */}
				<input
					type="radio"
					name="type"
					id="income"
					value="income"
					checked={type === "income"}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="income">💰 Income</label>
				<input
					type="radio"
					name="type"
					id="expense"
					value="expense"
					checked={type === "expense"}
					onChange={(e) => setType(e.target.value)}
				/>
				<label htmlFor="expense">🛒 Expense</label>
				<br />
			</div>
			<button type="submit">Add Transaction</button>
		</form>
	);
}
export default TransactionForm;
