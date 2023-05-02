import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,ActivityIndicator, FlatList } from 'react-native';
// import {  Header, Icon, Item, Input, Container} from 'native-base';
import { Button, Container, Heading, Icon, Item, Input } from 'native-base';
import ProductList from './ProductList';

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
    <Container>
      <View>
      {/* <Heading> */}
          {/* A component library for the */}
          <Text color="emerald.500"> React Ecosystem</Text>
      {/* </Heading> */}
      <View>
          
          <View style={{marginTop: 20}}>
          <FlatList
            // horizontal
            numColumns={2}
            data={products}
            renderItem={({item}) => <ProductList
            key={item.id}
            item={item}
            />}
            keyExtractor={item => item.name}
          />
           <Button variant='outline' onPress={() => console.log('pressed')}>Click me</Button>
          </View>
      </View> 
     </View> 
    </Container>      
    )
}

export default ProductContainer;
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
})

