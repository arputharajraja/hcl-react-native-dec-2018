// app/components/HomeScreen.js

import React from 'react';
import {View, Button, Text} from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
      };

    constructor(props) {
        super(props)
    }

    gotoPage = (pageName) => {

        // navigation injected by parent stack nav
        this.props.navigation.navigate(pageName);
    };


    gotoContact = () => {
        const address = {
            state: 'KA',
            city: 'BLR',
            pincode: 560001
        };

        // navigation injected by parent stack nav
        this.props.navigation.navigate("Contact", { address });
    };

    render() {
        return (
            <View>
                <Text style={ {fontSize: 24} }> Home Page</Text>

                <Button onPress={ () => this.gotoPage('About')}
                        title="About" />
                                
                <Button onPress={ () => this.gotoContact()}
                                        title="Contact" />
                                
                <Button onPress={ () => this.gotoPage('Checkout')}
                                                        title="Checkout" />
            
            <Button onPress={ () => this.gotoPage('Counter')}
                                                        title="Counter" />
            

            <Button onPress={ () => this.gotoPage('ReactReduxCounter')}
                                                        title="ReactReduxCounter" />
            
            

            <Button onPress={ () => this.gotoPage('FuncCounter')}
                                                        title="FuncCounter" />
            
            

            <Button onPress={ () => this.gotoPage('ProductList')}
                                                        title="ProductList" />
            
            
            </View>
        )
    }
}