import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid' // Import the univoque id creator
import { GlobalContext } from '../context/GlobalState' //TODO(1) Import the globalContext

const AddTransaction = () => {

    //TODO(2) Invoke the globalContext and destructuring
    const { addIncome, addExpense } = useContext(GlobalContext)

    //#region Income

    // useState method for incomes
    const [income, setIncome] = useState({
        incomeText: "", // Income text declare as an empty string
        incomeAmount: 0 // Income amount declare as 0
    })
    // incomeHandler fn
    const incomeHandler = (e) => {
        // Manage the income state
        setIncome({
            // Take the previous state
            ...income,
            // name='incomeText/incomeAmount' and take the value
            [e.target.name]: e.target.value
        })
    }
    // Destructuring of income/expense state
    const { incomeText, incomeAmount } = income
    // incomeSubmit Handler 
    const incomeSubmit = (event) => {
        // Prevent the refresh
        event.preventDefault()
        // Check if user Try to submit empty value
        if (incomeText === '') return
        if (incomeAmount === '') return

        // Create a new transaction
        const newIncomeTransaction = {
            id: uuidv4(), // Unique Id
            incomeText, // incomeText prop that was destructured previously
            incomeAmount: incomeAmount * 1 // incomeAmount prop that was destructured previously           
        }
        //TODO(3) Invoke the AddIncome fn and use as a param the new transaction
        addIncome(newIncomeTransaction)
        // Clear all field
        setIncome({
            incomeText: "", // Income text set again as an empty string
            incomeAmount: 0 // Income amount set again as 0
        })
    }

    //#endregion 

    //#region expense 

    // useState method for expenses
    const [expense, setExpense] = useState({
        expenseText: "", // expense text declare as an empty string
        expenseAmount: 0 // expense amount declare as 0
    })
    // expenseHandler fn
    const expenseHandler = (e) => {
        // Manage the income state
        setExpense({
            // Take the previous state
            ...expense,
            // name='expenseText/expenseAmount' and take the value
            [e.target.name]: e.target.value
        })
    }
    const { expenseText, expenseAmount } = expense
    // expenseSubmit Handler 
    const expenseSubmit = (event) => {
        // Prevent the refresh
        event.preventDefault()
        // Check if user Try to submit empty value
        if (expenseText === '') return
        if (expenseAmount === '') return

        // Create a new transaction
        const newExpenseTransaction = {
            id: uuidv4(), // Unique Id
            expenseText, // expenseText prop that was destructured previously
            expenseAmount: expenseAmount * 1 // expenseAmount prop that was destructured previously           
        }
        //TODO(3) Invoke the AddExpense fn and use as a param the new transaction
        addExpense(newExpenseTransaction)
        // Clear all field
        setExpense({
            expenseText: "", // expense text set again as an empty string
            expenseAmount: 0 // expense amount set again as 0
        })
    }

    //#endregion 

    return (
        /* form-wrapper */
        <div className="form-wrapper">
            {/* Add Income */}
            <form onSubmit={incomeSubmit}>
                {/* input-group income */}
                <div className="input-group income">
                    {/* Add Income */}
                    <input type="text" name='incomeText' value={incomeText} placeholder='Add Income...' autoComplete='off' onChange={incomeHandler} />
                    {/* Amount */}
                    <input type="number" placeholder='Amount' name='incomeAmount' value={incomeAmount} autoComplete='off' onChange={incomeHandler} />
                    {/* submit */}
                    <input type="submit" value="Submit" />
                </div>
            </form>
            {/* Add Expense */}
            <form onSubmit={expenseSubmit}>
                {/* input-group expense */}
                <div className="input-group expense">
                    {/* Add Expense */}
                    <input type="text" name='expenseText' placeholder='Add Expense...' value={expenseText} autoComplete='off' onChange={expenseHandler} />
                    {/* Amount */}
                    <input type="number" name='expenseAmount' placeholder='Amount' value={expenseAmount} autoComplete='off' onChange={expenseHandler} />
                    {/* submit */}
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
