// app/product/state/productListReducer.js

import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    products: [],
    loading: false
}

export default function productListReducer(state= INITIAL_STATE, action) {
    console.log('productListReducer called', state, action)

    switch(action.type) {
        case ActionTypes.INIT_PRODUCTS: 
            return {...state, products: action.payload.products}

        case ActionTypes.LOADING_PRODUCTS:
            return {...state, loading: action.payload.loading }
        default:
            return state;
    }

}