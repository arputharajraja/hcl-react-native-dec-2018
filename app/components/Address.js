// app/components/Address.js
import React  from 'react';
import {View, Text} from 'react-native';
// functional component/view component

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
            <Text>Phone</Text>
            { props.children }
        </View>
    )
}

