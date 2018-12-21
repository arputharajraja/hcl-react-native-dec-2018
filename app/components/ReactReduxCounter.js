// app/components/ReactReduxCounter.js

import React from 'react';

import {View, Text, Button} from 'react-native';

import store from '../store';
import * as actions from '../state/actions';

export default class ReactReduxCounter extends React.Component {

    static navigationOptions = {
        title: 'React Redux Counter'
    }

    constructor(props) {
        super(props); // MUST   
        
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            console.log('ReactRedux subs called');
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }


    increment = () => {
        console.log('increment called');
        const action = actions.increment(1);
        console.log('dispatching action ', action);
        // reducer called for every dispatch
        store.dispatch(action);

        const state = store.getState()
        console.log('counter now ', state.counter);
    }

    decrement = () => {
        console.log('decrement called');
        const action = actions.decrement(1);
        console.log('dispatching action ', action);
        // reducer called for every dispatch
        store.dispatch(action);

        const state = store.getState()
        console.log('counter now ', state.counter);
    }

    reset = () => {
        const action = actions.reset();
        console.log('dispatching action ', action);
        // reducer called for every dispatch
        store.dispatch(action);

        const state = store.getState()
        console.log('counter now ', state.counter);
    }
 
    render() {
 
        console.log('Counter render called');
        const state = store.getState();
        const counter = state.counter;
       
         return (
            <View>
                <Text>Counter</Text>
               
               
                <Text>Counter value {counter}</Text>




                <Button onPress={this.increment}
                        title="Increment" />

                <Button onPress={this.decrement}
                                        title="Decr" />


                <Button onPress={this.reset}
                               title="Reset" />


                { counter % 2 == 1 && 
                    <Text> Counter is odd number</Text>
                }

                {  counter % 2 == 0 &&
                <Text> Counter is even number</Text>
                }

                {
                     counter % 2 == 0?
                        <Text>EVEN</Text>
                        : <Text>ODD</Text>
                }

            </View>
        );
    }
}