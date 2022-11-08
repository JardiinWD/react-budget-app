//TODO(1) : Import actions from action file
import { ADD_INCOME, ADD_EXPENSE } from './actions'

//TODO(2) : Export the reducer fn that accept as params state and action
export default (state, action) => {
    switch (action.type) {
        // TODO(3) : Create a case for the income
        case ADD_INCOME:
            return {
                ...state,
                incomeTransactions: [
                    action.payload, // Upload the action payload into incomeTransactions
                    ...state.incomeTransactions // With the previous state
                ]
            }
        // TODO(3) : Create a case for the income
        case ADD_EXPENSE:
            return {
                ...state,
                expenseTransactions: [
                    action.payload, // Upload the action payload into expenseTransactions
                    ...state.expenseTransactions // With the previous state
                ]
            }
        default:
            return state;
    }
}