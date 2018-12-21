// app/components/AboutScreen.js

import React from 'react';
import {View, Button, Text} from 'react-native';

export default class AboutScreen extends React.Component {

    static navigationOptions = {
        title: 'About',
      };

    constructor(props) {
        super(props)
    }

    gotoMainOffice = () => {
        this.props.navigation.navigate("Contact",
                        {
                            address: { city: 'Denver',
                                        state: 'CO'}
                        });
    }


    gotoBranchOffice = () => {
        this.props.navigation.navigate("Contact",
                        {
                            address: { city: 'Delhi',
                                        state: 'DL'}
                        });
    }

    render() {
        return (
            <View>
                <Text style={ {fontSize: 24} }> About Page</Text>
            
                <Button onPress={this.gotoMainOffice}
                        title="Main Office" />

                
                <Button onPress={this.gotoBranchOffice}
                        title="Branch Office" />
            
            </View>
        )
    }
}