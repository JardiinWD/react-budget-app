// TODO(1) Import the useContext hook from React
import React, { useContext } from 'react'
// TODO(2) Import the globalContext component
import { GlobalContext } from '../context/GlobalState'
import SingleTransaction from './SingleTransaction'



const ExpenseList = () => {
    // TODO(2) Extract from the useContext the incomeTransactions
    const { expenseTransactions } = useContext(GlobalContext)

    return (
        /* transactions transactions-expense */
        <div className="transactions transactions-expense">
            {/* Transaction History */}
            <h2>Transaction History</h2>
            {/* transaction-list */}
            <ul className="transaction-list">
                {
                    expenseTransactions.map(singleIncome => {
                        // Declare the single item
                        return (
                            <SingleTransaction key={singleIncome.id} data={singleIncome} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExpenseList
