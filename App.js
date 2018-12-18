// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Counter} from './app/components/Counter';
import {Address} from './app/components/Address';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Counter startValue={0} />

        <Counter startValue={100} />

        <Address address={ {city: 'BLR', state: 'KA'} } >
          <Text>Contact: 9:30 AM to 6:00 PM</Text>
          <Text>Mon-Sat</Text>
    </Address>

        <Address address={ {city: 'Denver', state: 'CO'} } >
          <Text>Contact: 8:00 AM to 5:00 PM</Text>
          <Text>Mon-Fri</Text>
        </Address>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
