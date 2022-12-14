//TODO(1) : Import React and createContext / useReducer / AppReducer
import React, { createContext, useReducer, useEffect } from 'react'
import GlobalReducer from '../reducers/AppReducer'
//TODO(9) : Import actions
import { ADD_INCOME, ADD_EXPENSE, DELETE_TRANSACTION } from '../reducers/actions'


//TODO(2) : Create an initialState object

const initialState = {
    // Create an empty array for the incomes or take the incomes from the localStorage
    incomeTransactions: JSON.parse(localStorage.getItem('IncomeTransactions')) || [],
    // Create an empty array for expense or take the expense from the localStorage
    expenseTransactions: JSON.parse(localStorage.getItem('ExpenseTransactions')) || [],
}

/** Function where I can format in a proper way
 * 
 * @param {number} item "These are my income/expenseAmounts that I wanted to format"
 * @returns 
 */
const formatOptions = (item) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item)

// DON'T DO IT WHEN YOU HAVE TO SUM ALL THE AMOUNT. USE THE FORMAT ONLY FOR FORMATTING "TEXT"

// Update, with intl format number the incomeAmount
// initialState.incomeTransactions.forEach(element => (element.incomeAmount) = formatOptions(element.incomeAmount));
// Update, with intl format number the expenseAmount
// initialState.expenseTransactions.forEach(element => element.expenseAmount = formatOptions(element.expenseAmount));


//TODO(4) : Export as GlobalContext your initialState (wrapped in createContext fn)
export const GlobalContext = createContext(initialState)

//TODO(5) : Export as GlobalContextProvider your provider fn (you have to wrap the App component into Index)
export const GlobalContextProvider = ({ children }) => {
    //TODO(6) : Declare the useReducer hook with state and dispatch fn
    const [state, dispatch] = useReducer(GlobalReducer, initialState)

    /** Function that allows me to add a new income from "AddTransaction.js"
     * 
     * @param {Object} incomeTransaction // A new income object
     */
    const addIncome = incomeTransaction => {
        // Call the dispatch fn
        dispatch({
            type: ADD_INCOME,
            payload: incomeTransaction // It represents the payload of the action.
        })
    }

    useEffect(() => {
        localStorage.setItem('IncomeTransactions', JSON.stringify(state.incomeTransactions))
        localStorage.setItem('ExpenseTransactions', JSON.stringify(state.expenseTransactions))
    })

    /** Function that allows me to add a new expense from "AddTransaction.js"
     * 
     * @param {Object} expenseTransaction // A new expense object
     */
    const addExpense = expenseTransaction => {
        // Call the dispatch fn
        dispatch({
            type: ADD_EXPENSE,
            payload: expenseTransaction // It represents the payload of the action.
        })
    }

    /** Function that allows me to remove a transaction from "AddTransaction.js"
     * 
     * @param {object} id 
     */
    const deleteTransaction = (id) => {
        dispatch({
            type: DELETE_TRANSACTION, // The action itself.
            payload: id // It represents the payload of the action.
        })
    }

    //TODO(7) : Declare a return where you wrapped children into the provider
    return (
        //TODO(8) : Pass through the value attribute the state
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction,
            formatOptions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}