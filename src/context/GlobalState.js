//TODO(1) : Import React and createContext / useReducer / AppReducer
import React, { createContext, useReducer } from 'react'
import AppReducer from '../reducers/AppReducer'

//TODO(2) : Create an initialState object
const initialState = {
    // Create an empty array for the incomes
    incomeTransactions: [
        //TODO(3) : Import a list of obj with dummy data
        { id: 1, incomeText: "Car Sold", incomeAmount: 15000 },
        { id: 2, incomeText: "Salary", incomeAmount: 5000 },
        { id: 2, incomeText: "Bonus", incomeAmount: 13000 },
    ],
    // Create an empty array for expense
    expenseTransactions: [
        //TODO(3) : Import a list of obj with dummy data
        { id: 4, expenseText: "Rent", expenseAmount: 1000 },
        { id: 5, expenseText: "Bank", expenseAmount: 2000 },
        { id: 6, expenseText: "Clothes", expenseAmount: 500 },
    ],
}

//TODO(4) : Export as GlobalContext your initialState (wrapped in createContext fn)
export const GlobalContext = createContext(initialState)

//TODO(5) : Export as GlobalContextProvider your provider fn (you have to wrap the App component into Index)
export const GlobalContextProvider = ({ children }) => {
    //TODO(6) : Declare the useReducer hook with state and dispatch fn
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //TODO(7) : Declare a return where you wrapped children into the provider
    return (
        //TODO(8) : Pass through the value attribute the state
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}