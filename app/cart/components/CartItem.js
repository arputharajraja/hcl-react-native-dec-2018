// app/cart/components/CartItem.js
import React, {Component} from "react";

import {View, Text, Button, StyleSheet} from "react-native";
 

export default class CartItem extends Component {
     
    constructor(props) {
        super(props);
        console.log("cart item created", props.item.id);
    }
 
    render() {
        // deconstruct
        let {item} = this.props;
        
        console.log("CartItem render ", item.id);

        return (
            <View  >
                <Text  >{item.name}</Text>

                <Text  >Rs: {item.price}</Text>
 

                <Text>Qty: {item.qty} </Text>

                <Text> RS: {item.price * item.qty}</Text>
    
            </View>
        )
    }
  
}
 