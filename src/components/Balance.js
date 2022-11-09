import React, { useContext } from 'react'
//TODO(1) : Import globalContext
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

    // Destructuring of globalContext
    const { incomeTransactions, expenseTransactions, formatOptions } = useContext(GlobalContext)

    // Map the total of incomeAmounts
    const incomeAmounts = incomeTransactions.map(
        (incomeTransaction) => {
            return incomeTransaction.incomeAmount
        }
    ).reduce((acc, item) => {
        return Number(acc = +acc + item)
    }, 0).toFixed(2)

    // Map the total of expenseAmounts
    const expenseAmounts = expenseTransactions.map(
        (expenseTransaction) => expenseTransaction.expenseAmount
    ).reduce((acc, item) => {
        return Number(acc += item)
    }, 0).toFixed(2)

    return (
        /* balance */
        <div className="balance">
            {/* Your Balance */}
            <h2>Your Balance</h2>
            {/* Actual Balance */}
            <h3>$0.00</h3>
            {/* income-expense */}
            <div className="income-expense">
                {/* plus */}
                <div className="plus">
                    <h3>Income</h3>
                    <p>{formatOptions(incomeAmounts)}</p>
                </div>
                {/* minus */}
                <div className="minus">
                    <h3>Expense</h3>
                    <p>{formatOptions(expenseAmounts)}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
