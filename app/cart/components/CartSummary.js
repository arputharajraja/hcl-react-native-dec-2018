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
    recalculate(props) {
        let discount = 0;
        if (props.totalItems >= 10) {
            discount = 20;
        } else if (props.totalItems >= 5) {
            discount = 10;
        }

        this.setState({discount});
    }

    componentWillMount() {
        this.recalculate(this.props);
    }

    // called on update cycle
    // called whenever parent render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log('Cart Summary will receive props')
        console.log('current props', this.props)
        console.log('next props', nextProps);

        if (this.props.totalItems != nextProps.totalItems) {
            this.recalculate(nextProps);
        }
    }
 
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