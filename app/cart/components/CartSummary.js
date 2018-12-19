// app/cart/components/CartSummary.js

import React from "react";

import {View, Text} from "react-native";
 
export default class CartSummary extends React.Component {
    // creation cycle, once once
    constructor(props) {
        super(props);

        this.state = {
            discount: 0
        }
    }

    //TODO: react to parent data change
 
    render() {
            console.log("cart summary render");
 
            return (
                <View>
                    <Text> Amount {this.props.amount} </Text>
                    <Text> Total Items {this.props.totalItems} </Text>
                    <Text> Discount {this.state.discount} % </Text>
                
                </View>
            )
    }
}