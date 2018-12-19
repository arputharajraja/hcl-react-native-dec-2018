// app/cart/components/CartList.js
import React, {Component} from "react";

import {View, Text} from "react-native";

import CartItem from "./CartItem";

// Pure vs Component
export default class CartList extends Component {
    constructor(props) {
        super(props);
         
    }
 
 
    render() {
        // items should be passed from parent to child
        let items = this.props.items || [];
        console.log("CartList render", items.length);
        
        return (
            <View>
                <Text>Cart List - {items.length}</Text>
 
         


            </View>
        )
    }
}