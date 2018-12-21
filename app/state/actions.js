// app/state/actions.js

import * as ActionTypes from './action-types';

// action creators, create an action
// helper methods

export function increment(value) {
    return {
        type: ActionTypes.INCREMENT,
        payload: { value}
    }
}

export const decrement = (value) => ({
    type: ActionTypes.DECREMENT,
    payload: {value}
})

export const reset = () => ({
    type: ActionTypes.RESET
})
