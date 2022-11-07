import React from 'react'

const IncomeList = () => {
    return (
        /* transactions transactions-income */
        <div className="transactions transactions-income">
            {/* Transaction History */}
            <h2>Transaction History</h2>
            {/* transaction-list */}
            <ul className="transaction-list">
                {/* transaction */}
                <li className="transaction">
                    {/* text */}
                    <span className="transaction-text">Salary</span>
                    {/* amount */}
                    <span className="transaction-amount">$5000</span>
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

export default IncomeList
