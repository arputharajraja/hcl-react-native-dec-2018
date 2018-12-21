// app/cart/components/Paypal.ios.js
import React  from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// functional component/view component

// component
const Paypal = (props) => (
    <View>
        <Ionicons name="md-call" 
                         size={24} 
                         color="red"
                         />
        <Text> Paypal iOS {props.bankcode}</Text>
    </View>
);

export default Paypal;
