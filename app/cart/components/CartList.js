// app/cart/components/CartList.js
import React, {Component, PureComponent} from "react";

import {View, Text, ScrollView} from "react-native";

import CartItem from "./CartItem";

// Pure vs Component
// PureComponent already implements shouldComponentUpdate
export default class CartList extends PureComponent {
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
 
                <ScrollView>
                    {
                        items.map(item => (
                            <CartItem item={item}
                                      key={item.id}
                                      removeItem={this.props.removeItem}
                                      updateItem={this.props.updateItem}
                                      
                                      
                                      />
                        ))
                    }
                </ScrollView>


            </View>
        )
    }
}