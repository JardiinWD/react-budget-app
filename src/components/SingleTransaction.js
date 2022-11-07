import React from 'react'

const SingleTransaction = ({ data }) => {
    // Check if the transaction is an income
    if (data.incomeText || data.incomeAmount) {
        // Destructuring of Data
        const { id, incomeText, incomeAmount } = data
        // returned the single Income
        return (
            <li id={id} className="transaction">
                {/* text */}
                <span className="transaction-text">{incomeText}</span>
                {/* amount */}
                <span className="transaction-amount">${incomeAmount}</span>
                {/* delete-btn */}
                <button className="delete-btn">
                    {/* fas fa-trash */}
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
    // Check if the transaction is an expense    
    if (data.expenseText || data.expenseAmount) {
        // Destructuring of Data
        const { id, expenseText, expenseAmount } = data
        // returned the single Expense
        return (
            <li id={id} className="transaction">
                {/* text */}
                <span className="transaction-text">{expenseText}</span>
                {/* amount */}
                <span className="transaction-amount">${expenseAmount}</span>
                {/* delete-btn */}
                <button className="delete-btn">
                    {/* fas fa-trash */}
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default SingleTransaction
