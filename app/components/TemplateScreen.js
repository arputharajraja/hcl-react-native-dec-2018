import React from 'react';
import {View, Button, Text} from 'react-native';

export default class TemplateScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text style={ {fontSize: 24} }> Page Name</Text>
            </View>
        )
    }
}