// app/cart/components/Cart.js
import React, {Component} from "react";

import {View, Text, Button, StyleSheet} from "react-native";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends React.Component {
 
    static navigationOptions = {
        title: 'CART'
    }

    constructor(props) {
        super(props);
        console.log("cart cons ", props);

        // ownership of data == by Cart
        // update should happen in the parent component
        this.state = {
            items: [{name: 'p1', qty: 8, price: 100, id: 10}],
            // derived from items
            amount: 0,
            totalItems: 0,
            flag: true
        }
    }

    recalculate(items) {
        // let items = this.state.items; // old state, bug

        let amount = 0, totalItems = 0;
        for (let item of items) {
            amount += item.qty * item.price;
            totalItems += item.qty;
        }

        
        // setState is called 3/4 times,
        // but still render shall called only once after merging update
        this.setState({
            amount,  // es6, amount: amount
            totalItems
        })
 
    }
  

    // called on update life cycle
    addItem = () => {
        console.log("Adding new Item")
        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(20 + Math.random() * 100),
            qty: 1
        }
       
        // TODO
        // immutable
        const items = [...this.state.items, item];
         
        this.setState({
            items
        });

        // BUG, async this.recalculate(this.state.items);
        this.recalculate(items);
    }


    // send removeItem function as props to CartItem
    //child (CartItem) component does callback
    removeItem = (id) => {
        console.log('remove item ', id)
        // TODO

        const items = this.state
                      .items
                      .filter(item => item.id != id);

        this.setState({items});
        this.recalculate(items);
                      
    }


    //callback
    updateItem = (id, qty) => {
        console.log("update ", id, qty);
         // TODO
         // new array
        const items = this.state.items
                          .map (item => {
                              if (item.id == id) {
                                  // copy of the item
                                const newItem = {...item, qty}
                                return newItem;
                              }

                              return item;
                          });

        this.setState({items});
        this.recalculate(items);
    }

    empty = () => {
       //TODO
       this.setState({
           items: []
       })

       this.recalculate([]);
    }

    // dummy method, to explain the side effect of render methods
    refresh = ()  => {
        this.setState({
            flag: !this.state.flag
        });
    }


    componentWillMount() {
        this.recalculate(this.state.items);
    }



    // first time on creation cycle, we cannot stop
    // called on update cycle we can stop using shouldComponentupdate
    // when state is merged with next state, when render is called
     
    render() {

        console.log("-------------------------------------")
        console.log("cart render");
         
         
return (
        <View style={styles.container}>
            <Text>{this.props.title}</Text>

            <Button title="Add"
                        onPress={this.addItem}
            />

            <Button title="Refresh"
                        onPress={this.refresh}
            /> 

            <Button title="Empty"
                        onPress={this.empty}
            /> 

            <CartSummary amount={this.state.amount}
                         totalItems={this.state.totalItems} />
            

            <CartList items={this.state.items} 
                      removeItem={this.removeItem}
                      updateItem={this.updateItem}
            />

           

        </View>
)
    }

}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
     
    },
  });