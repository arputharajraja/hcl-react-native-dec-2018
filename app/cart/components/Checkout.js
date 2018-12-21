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
    StyleSheet,
    Platform
} from 'react-native';

import Paypal from './Paypal';

const Purchase = Platform.select({
    ios: function Purchase() {
            return (
                <View >
                    <Text>Use iStore to buy</Text>
                </View>
            );
    },

    android: function Purchase() {
        return (
            <View >
                <Text>Use Play Store to buy</Text>
            </View>
        );
    }
})

function AndroidPay() {
    return (
        <View >
                <Text>Android pay 20 % discount</Text>
            </View>
    )
}


function ApplePay() {
    return (
        <View >
                <Text>Apple pay 10 % discount</Text>
            </View>
    )
}

const Pay = Platform.select({
    ios: ApplePay,
    android: AndroidPay
});

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
        // this.nameInput.focus();
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
<View style={ styles.container }>

 <View style={styles.viewStyle}>
    
    <View style={styles.addressView}>
    <Text style={styles.sectionTitle}>Checkout</Text>

    <Text style={styles.labelText}>Your Name</Text>
            
    <TextInput
        style={ styles.textInput }
    
        value={this.state.fullName}

        onChangeText={this.onChangeName}

        ref={ (nameInput) => this.nameInput = nameInput  }
    />

    <Text style={styles.labelText}>Ship to Home</Text>

    <Switch style={ [styles.spaceTop]} value={this.state.shipToHome} 
    
    onValueChange = { (shipToHome) => this.setState({shipToHome})}
    />

</View>

<View style={styles.cardView}>
<Picker
  selectedValue={this.state.cardType}
  style={ {height: 20} }
  onValueChange={(cardType, itemIndex) => this.setState({cardType: cardType})}>
  <Picker.Item label="Visa" value="visa" />
  <Picker.Item label="Master" value="master" />
  <Picker.Item label="Rupay" value="rupay" />
  <Picker.Item label="Paypal" value="paypal" />
</Picker>
</View>

<View style={styles.checkoutView}>
<Text style={ [{marginTop: 10}, styles.cartType]}> Your card type is {this.state.cardType} </Text>

{
    this.state.isProgress && 
<ActivityIndicator size="large" color="#0000ff" />
}

<Text style={styles.labelText}>Your Address</Text>


<Button onPress={this.payNow} title="Pay now" />

<Purchase />

<Pay />

{
    Platform.select({
        ios: <Text> Black Friday Offer</Text>,
        android:  <Text> Cybermonday Offer</Text>
    })
}

<Paypal />

</View>
</View>
</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
       
    },

    viewStyle: {
        marginLeft: 10,
    },

    addressView: {
        flex: 1
    },

    cardView: {
        flex: 1
    },


    checkoutView: {
        flex: 1
    },

    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        backgroundColor: 'blue'
    },

    spaceTop: {
        marginTop: 10,
    },

    textInput: {
        height: 40,
        borderColor: 'gray', 
        borderWidth: 2,
        marginTop: 10
    },

    cartType: Platform.select({
        ios: {
            fontWeight: 'bold',
            fontSize: 24,
            backgroundColor: 'red'
        },
        android: {
            fontWeight: 'bold',
            fontSize: 18,
            backgroundColor: 'yellow'
        }
    }),

    labelText: {
        fontWeight: 'bold',
        fontSize: 18
    }
})