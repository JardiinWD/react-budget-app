//TODO(1) : Import actions from action file
import { ACTION, ADD_INCOME } from './actions'

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


        default:
            return state;
    }
}