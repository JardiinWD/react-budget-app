import React from 'react'

const ExpenseList = () => {
    return (
        /* transactions transactions-expense */
        <div className="transactions transactions-expense">
            {/* Transaction History */}
            <h2>Transaction History</h2>
            {/* transaction-list */}
            <ul className="transaction-list">
                {/* transaction */}
                <li className="transaction">
                    {/* text */}
                    <span className="transaction-text">Rent</span>
                    {/* amount */}
                    <span className="transaction-amount">$500</span>
                    {/* delete-btn */}
                    <button className="delete-btn">
                        {/* fas fa-trash */}
                        <i className="fas fa-trash"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList
