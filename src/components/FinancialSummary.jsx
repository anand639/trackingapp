import React from "react";
function FinancialSummary({transaction}){
    // calculate total income if user input type is income 
    const totalIncome = transaction
    .filter(transaction=> transaction.type === 'income')
    .reduce((acc, curr)=> acc + curr.amount,0)
    // calculate total expense if user input type is expense 
    const  totalExpenses = transaction
    .filter(transaction => transaction.type==='expense')
    .reduce((acc, curr)=> acc+curr.amount ,0);
    // Calculate the net savings 
    const netSavings = totalIncome - totalExpenses;
    // netSaving = negative ?? loss 
    // netSaving = positive ?? profit 
    // render it 
    return (
        <div>
        <h3>👜 Total Income: ${totalIncome.toFixed(2)} </h3>
        <h3>💳 Total Expenses: ${totalExpenses.toFixed(2)}</h3>
        <h3>🌱🤑 Net Savings: ${netSavings.toFixed(2)}</h3>
        </div>
    )
}
export default  FinancialSummary;