import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {
    
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([])
        }
    }, [])

    return (
        <View style={{marginTop: 100}}>
            <Text>Product Container</Text>
            <FlatList
                horizontal
                data={products}
                renderitem={({item}) => <Text>{item.brand}</Text>}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

export default ProductContainer;