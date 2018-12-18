// app/components/Counter.js

import React from 'react';

import {View, Text, Button} from 'react-native';

// export Counter so that we can import in App.js
export class Counter extends React.Component {

    constructor(props) {
        super(props); // MUST   

        // react keyword
        // manipulate the state data
        this.state = {
            counter: props.startValue
        }
    }


    increment = () => {
        console.log('increment called');
        console.log('counter before ', this.state.counter);
    
        // NOT A GOOD PRACTICE
        this.state.counter++;

        console.log('counter after', this.state.counter);
        
        // NOT A GOOD PRACTICE
        // react keyword
        // force react framework to call render method
        this.forceUpdate();
    }


    // react keyword
    // creates a virtual dom and return the v.dom
    // MUST
    render() {

        //this.props - react keyword
        // contains data passed from parent component


        //this.props.children is a keyword

        console.log('Counter render called');
         return (
            <View>
                <Text>Counter</Text>
                <Text>Start Value {this.props.startValue}</Text>
            
                <Text>Counter value {this.state.counter}</Text>
                <Button onPress={this.increment}
                        title="Increment" />
            </View>
        );
    }
}