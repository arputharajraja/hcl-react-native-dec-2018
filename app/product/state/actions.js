// app/product/state/actions.js

import * as ActionTypes from './action-types';
import * as service from './service';

// returns  object as action
export const initProducts = (products) => ({
    type: ActionTypes.INIT_PRODUCTS,
    payload: {products}
})

// returns  object as action
export const loadingProducts = (loading) => ({
    type: ActionTypes.LOADING_PRODUCTS,
    payload: {loading}
})

// returns function as action
export function loadProducts() {
    // dispatch, getState passed by thunk middleware
    // https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
    return function actionFunc(dispatch, getState) {
        // thunk middleware shall call this
        console.log('called by thunk ');

        // set loading on

        dispatch(loadingProducts(true));

        return service
        .getProducts()
        .then ( products => {
            const action = initProducts(products);
            dispatch(action);

            // set loading off
            dispatch(loadingProducts(false));
        })
    }
}
