// app/product/components/ProductList.js
import React from 'react';
import {View, Button, Text, FlatList, ActivityIndicator} from 'react-native';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // fetch data from service when component loaded
        this.props.loadProducts();
    }

    render() {
        const products = this.props.products || [];
        const loading = this.props.loading;

        return (
            <View>
                <Text style={ {fontSize: 24} }> Product List</Text>
                {loading && <ActivityIndicator />}
                <FlatList data={products}
                            renderItem={({item}) => <Text style={ {fontSize: 24} } key={item.id}>{item.name}</Text>}

                >

                </FlatList>
            </View>
        )
    }
}