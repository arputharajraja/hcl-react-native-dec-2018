// app/store.js
import {createStore, 
        combineReducers,
        applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import counterReducer from './state/counterReducer';
import productListReducer 
        from './product/state/productListReducer';

function loggerMiddleware( store ) {
        return function(next) {
               
                return function(action) {
                        // called for every dispatch
                        console.log('logger middleware', action)
                        //example, what thunk does
                        // if (typeof action == 'function') {
                        //         return action(store.dispatch, store.getState);
                        // }

                        return next(action); 
                }
        }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    productList: productListReducer
    //...
});

const store = createStore(rootReducer, 
                          applyMiddleware(loggerMiddleware, thunk));

export default store;