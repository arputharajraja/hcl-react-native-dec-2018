// app/components/Address.js
import React  from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// functional component/view component

// component
const Phone = (props) => (
    <View>
        <Ionicons name="md-call" 
                         size={24} 
                         color="grey"
                         />
        <Text> Phone {props.phone}</Text>
    </View>
);

const Email = (props) => (
    <View>
         <Ionicons name="md-mail" 
                         size={24} 
                         color="grey"
                         />
        <Text> Email {props.email}</Text>
    </View>
);


// create and return virtual dom
// props are passed as first argument
export function Address(props) {
    console.log('Address render');

    // props are immutable
    // props.address = {};

    // props.children

    const address = props.address;

    return (
        <View>
            <Text>City {address.city}</Text>
            <Text>State {address.state}</Text>
            <Text>Pincode</Text>
            <Phone phone={34523542343} />
            <Email email='someone@example.com' />
            <Email email='text@gmail.com' />
            { props.children }
        </View>
    )
}

