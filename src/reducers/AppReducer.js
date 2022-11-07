//TODO(1) : Import actions from action file
import { ACTION } from './actions'

//TODO(2) : Export the reducer fn that accept as params state and action
export default (state, action) => {
    switch (action.type === ACTION) {
        default:
            return state;
    }
}