// app/components/FuncCounter.js

import React from 'react';

import {View, Text, Button} from 'react-native';

// Dump component
// Presentation component
// accept 4 props from container, who is parent
// counter as value
// reset, increment/decrement are functions
//
export default function FuncCounter(props) {
 
        console.log('FuncCounter   called');
        const counter = props.counter;
       
         return (
            <View>
                <Text>Counter</Text>
               
               
                <Text>Counter value {counter}</Text>


                <Button onPress={props.increment}
                        title="Increment" />

                <Button onPress={props.decrement}
                                        title="Decr" />


                <Button onPress={props.reset}
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

FuncCounter.navigationOptions = {
    title: 'Func Counter'
}