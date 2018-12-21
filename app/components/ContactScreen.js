// app/components/ContactScreen.js

import React from 'react';
import {View, Button, Text} from 'react-native';
import {Address} from './Address'

import { Ionicons } from '@expo/vector-icons';


const ContactTitle = () => (
    <View style = { {flex: 1, flexDirection: 'row', justifyContent: 'center'} }>
        <Ionicons name="md-mail" 
                         size={24} 
                         color="grey"
                         />
        <Text style={ {backgroundColor: 'lightgreen'}}>Contact Page</Text>
        
    </View>
);



export default class ContactScreen extends React.Component {
    static navigationOptions = {
//        title: 'Contact',
            headerTitle: <ContactTitle />
      };


    constructor(props) {
        super(props)
    }

    render() {
        const address = this.props.navigation.getParam('address')
        return (
            <View>
                <Text style={ {fontSize: 24} }> Contact Page</Text>

                <Address address = {address} />

                <Button title="Back"
                        onPress={ () => this.props.navigation.goBack()} />
            

                <Button title="Go to Top"
                    onPress={ () => this.props.navigation.popToTop()} />
        

            
            
            </View>
        )
    }
}