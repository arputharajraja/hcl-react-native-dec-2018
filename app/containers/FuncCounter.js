// app/containers/FuncCounter.js

import {connect} from 'react-redux';
// actual dump component
import FuncCounter 
    from '../components/FuncCounter';

import * as actions 
    from '../state/actions';

// container creation
// state ==> store.getState()
// who call this method?
// ans. container
// when it has been called?
// ans. called on very first time
// ans. called on every subscribe (after dispatch)
// what it should return?
// ans return property values needed for component
// ans. counter value 
function mapStateToProps(state) {
    return {
        // property name: value from state
        counter: state.counter
    }
}

// dispatch ==> store.dispatch
// who call this method?
// ans. container
// when?
// ans. whenever component created first time
// returns props with functions
// reset, increment, decrement
function mapDispatchToProps(dispatch) {
    return {
        increment: function() {
            const action = actions.increment(1);
            console.log('dispatching action ', action);
            // reducer called for every dispatch
            dispatch(action);
        },
        decrement: function() {
            const action = actions.decrement(1);
            console.log('dispatching action ', action);
            // reducer called for every dispatch
            dispatch(action);
        },
        reset: function() {
            const action = actions.reset();
            console.log('dispatching action ', action);
            // reducer called for every dispatch
            dispatch(action);
        }
    }
}


// container also a component
// wraps the component
// subscribe, unsubscribe
// dispatch, getState
// Container is Pure component
// Smart component
// const FuncCounterContainer = connect(mapStateToProps,
//                                     mapDispatchToProps) (FuncCounter);

// export default FuncCounterContainer;


export default  connect(mapStateToProps,
                        mapDispatchToProps) 
                        (FuncCounter);
    