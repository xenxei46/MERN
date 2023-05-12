// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet,ActivityIndicator, FlatList, Pressable } from 'react-native';
// import { Button,Text, Container, HStack, Heading,IconButton, Icon, Item, Input } from 'native-base';
// import { MaterialIcons } from "@expo/vector-icons";
// import ProductList from './ProductList';
// import SearchedProduct from './SearchedProducts';
// // import Banner from '../../Shared/Banner';

// const data = require('../../assets/data/products.json');

// const ProductContainer = () => {

//   const [ products, setProducts ] = useState([]);
//   const [ focus, setFocus ] = useState([]);
//   const [ productsFiltered, setProductsFiltered ] = useState([]);

//   useEffect(() => {
//     setProducts(data);
//     setProductsFiltered(data);
//     setFocus(false);

//     return () => {
//       setProducts([])
//     }
//   }, [])
     
//   const searchProduct = (searchdata) => {
//     setProductsFiltered(
//       products.filter((item) => item.name.toLowerCase().includes(searchdata.toLowerCase()))
//     );
//   };

//     const openList = () => {
//       setFocus(true);
//     }

//     const onBlur = () => {
//       setFocus(false);
//     }

//     return (
//     <Container>
//       <View>
//         <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
//           <HStack alignItems="center" w="80%">
//           <Input 
//              onFocus={openList}
//              onChangeText={(text) => searchProduct(text)} 

//             placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="6" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<MaterialIcons name="search" />} />
            
//             } 
//             />
        
//             { focus == true ? 
//               <Pressable style={{backgroundColor:'red', height:20, width:20}} onPress={onBlur}>
//                 <MaterialIcons name="close" /> 
//               </Pressable>
//             : null 
//             }

//           </HStack>
//         </HStack>
//         {focus == true ? (
//           <SearchedProduct
//              productsFiltered={productsFiltered}
//           />
//         ) : (
//           <View style={{marginTop: 20}}>
//             <View style={[styles.container]}>
//               <View>
//                 {/* <Banner/> */}
//               </View>
//                 <View>
//                     <FlatList
//                       // horizontal
//                       numColumns={2}
//                       data={products}
//                       renderItem={({item}) => <ProductList
//                       key={item.id}
//                       item={item}
//                       />}
//                       keyExtractor={item => item.name}
//                     />
//                 </View>
//             </View>
//            {/* <Button variant='outline' onPress={() => console.log('pressed')}>Click me</Button> */}
//           </View>
//         )}    
//      </View> 
//     </Container>      
//     )
// }

// export default ProductContainer;
// const styles = StyleSheet.create({
//   container: {
//     flexWrap: "wrap",
//     backgroundColor: "gainsboro",
//   },
// })
 
import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import Banner from '../../Shared/Banner';

const products = require('../../assets/data/products.json')

const productContainer = () => {
  const [search, setSearch] = React.useState('search products...');
  console.log(products.filter(item=>item.name.toLowerCase().includes(search)));
  console.log(products)
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setSearch(e)}
        value={search}
      />
      <View>
        {products.filter((item) => item.name.toLowerCase().includes(search)
        ).map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>

        ))}
      </View>
    </SafeAreaView>
  )
}

export default productContainer

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


  