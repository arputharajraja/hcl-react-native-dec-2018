// app/cart/components/Checkout.js
import React from 'react';
import {
    View,
    Text, 
    Button, 
    Alert,
    Switch,
    Picker,
    TextInput, 
    ActivityIndicator,
    StyleSheet
} from 'react-native';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: 'Your name',
            shipToHome: false,
            cardType: 'visa',
            isProgress: false
        }
    }

    componentDidMount() {
        // JS counterpart, not real Android/ios UI obj
        // internally convert to JSON, bridge
        this.nameInput.focus();
    }

    onChangeName = (fullName) => {
        console.log('you are typing ', fullName);
        this.setState({
            fullName
        })
    }

    payNow = () => {
        this.setState({
            isProgress: true
        })

        setTimeout( () => {
            this.setState({
                isProgress: false
            })
        }, 5000)
    }


    render() {
        console.log('Checkout Render')
        return (
<View>
    <Text>Checkout</Text>

    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2}}
    
        value={this.state.fullName}

        onChangeText={this.onChangeName}

        ref={ (nameInput) => this.nameInput = nameInput  }
    />

    <Switch value={this.state.shipToHome} 
    
    onValueChange = { (shipToHome) => this.setState({shipToHome})}
    />


<Picker
  selectedValue={this.state.cardType}
  style={{ height: 50, width: 200 }}
  onValueChange={(cardType, itemIndex) => this.setState({cardType: cardType})}>
  <Picker.Item label="Visa" value="visa" />
  <Picker.Item label="Master" value="master" />
  <Picker.Item label="Rupay" value="rupay" />
  <Picker.Item label="Paypal" value="paypal" />
</Picker>

<Text> Your card type is {this.state.cardType} </Text>

{
    this.state.isProgress && 
<ActivityIndicator size="large" color="#0000ff" />
}

<Button onPress={this.payNow} title="Pay now" />


</View>
        )
    }
}