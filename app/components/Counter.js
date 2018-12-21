// app/components/Counter.js

import React from 'react';

import {View, Text, Button} from 'react-native';

// export Counter so that we can import in App.js
export class Counter extends React.Component {

    static navigationOptions = {
        title: 'Counter'
    }

    constructor(props) {
        super(props); // MUST   

        // react keyword
        // manipulate the state data
        this.state = {
            counter: props.startValue || 0
        }
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            this.decrement();
            console.log('timer called');
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    increment = () => {
        console.log('increment called');
        console.log('counter before ', this.state.counter);
    
        // NOT A GOOD PRACTICE, MUTATING STATE directly
        this.state.counter++;

        console.log('counter after', this.state.counter);
        
        // NOT A GOOD PRACTICE
        // react keyword
        // force react framework to call render method
        this.forceUpdate();
    }

    decrement = () => {
        console.log('decrement called');
        console.log('counter before ', this.state.counter);
        // GOOD
        // react keyword
        // accept new state as argument
        // merge the new state with existing state
        // calls shouldCompnentUpdate [true/false]
        // trigger the render function
        // async method
        this.setState({
            counter: this.state.counter - 1
        });
        console.log('counter after', this.state.counter);
    }


    // react keyword
    // creates a virtual dom and return the v.dom
    // MUST
    render() {

        //this.props - react keyword
        // contains data passed from parent component


        //this.props.children is a keyword

        console.log('Counter render called');
        // JSX - JavaScript + XML
        // Babel convert JSX to JS
         return (
            <View>
                <Text>Counter</Text>
                <Text>Start Value {this.props.startValue}</Text>
            
                <Text>Counter value {this.state.counter}</Text>




                <Button onPress={this.increment}
                        title="Increment" />

                <Button onPress={this.decrement}
                                        title="Decr" />


                { this.state.counter % 2 == 1 && 
                    <Text> Counter is odd number</Text>
                }

                { this.state.counter % 2 == 0 &&
                <Text> Counter is even number</Text>
                }

                {
                    this.state.counter % 2 == 0?
                        <Text>EVEN</Text>
                        : <Text>ODD</Text>
                }

            </View>
        );
    }
}