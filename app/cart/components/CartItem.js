// app/cart/components/CartItem.js
import React, {PureComponent} from "react";

import {View, Text, Button, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default class CartItem extends PureComponent {
     
    constructor(props) {
        super(props);
        console.log("cart item created", props.item.id);
    }

    componentDidMount() {
        console.log('CartItem did mount ' + this.props.item.id);
    }

    componentWillUnmount() {
        console.log('CartItem will unmount ' + this.props.item.id);
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

                <Ionicons name="md-add-circle-outline" 
                         size={48} 
                         color="green" 
                         
                         onPress={ () => this.props.updateItem(item.id, item.qty  +1)   }
                         
                         />

                <Ionicons name="md-trash" 
                          size={48} 
                          color="red"
                          onPress={ () => this.props.removeItem(item.id)   }

                          />
 
            </View>
        )
    }
  
}
 