import React from 'react'

const Balance = () => {
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
                    <p>+$0.00</p>
                </div>
                {/* minus */}
                <div className="minus">
                    <h3>Expense</h3>
                    <p>-$0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
