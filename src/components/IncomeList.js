// TODO(1) Import the useContext hook from React
import React, { useContext } from 'react'
// TODO(2) Import the globalContext component
import { GlobalContext } from '../context/GlobalState'
import SingleTransaction from './SingleTransaction'


const IncomeList = () => {
    // TODO(2) Extract from the useContext the incomeTransactions
    const { incomeTransactions } = useContext(GlobalContext)

    return (
        /* transactions transactions-income */
        <div className="transactions transactions-income">
            {/* Transaction History */}
            <h2>Transaction History</h2>
            {/* transaction-list */}
            <ul className="transaction-list">
                {/* transaction */}
                {
                    incomeTransactions.map(singleIncome => {
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

export default IncomeList
