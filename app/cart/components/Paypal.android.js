// app/cart/components/Paypal.android.js

import React  from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// functional component/view component

// component
const Paypal = (props) => (
    <View>
        <Ionicons name="md-call" 
                         size={24} 
                         color="grey"
                         />
        <Text> Paypal Android {props.bankcode}</Text>
    </View>
);

export default Paypal;
