//TODO(1) : Import actions from action file
import { ADD_INCOME, ADD_EXPENSE, DELETE_TRANSACTION } from './actions'

//TODO(2) : Export the reducer fn that accept as params state and action
const GlobalReducer = (state, action) => {
    switch (action.type) {
        // TODO(3) : Create a case for the income
        case ADD_INCOME:
            return {
                ...state, // The current state
                incomeTransactions: [
                    action.payload, // Upload the action payload into incomeTransactions
                    ...state.incomeTransactions // With the previous state
                ]
            }
        // TODO(3) : Create a case for the income
        case ADD_EXPENSE:
            return {
                ...state, // The current state
                expenseTransactions: [
                    action.payload, // Upload the action payload into expenseTransactions
                    ...state.expenseTransactions // With the previous state
                ]
            }
        case DELETE_TRANSACTION:
            return {
                ...state, // The current state
                // Filter the incomeTransactions
                incomeTransactions: state.incomeTransactions.filter(
                    // action.payload => id
                    (incomeTransaction) => incomeTransaction.id !== action.payload
                ),
                // Filter the expenseTransactions
                expenseTransactions: state.expenseTransactions.filter(
                    // action.payload => id
                    expenseTransaction => expenseTransaction.id !== action.payload
                )
            }
        default:
            return state;
    }
}

export default GlobalReducer