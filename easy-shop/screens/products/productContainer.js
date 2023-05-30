import React, { useState, useEffect } from 'react';
import { View, StyleSheet,ActivityIndicator, FlatList, Pressable } from 'react-native';
import { Button,Text, Container, HStack, Heading,IconButton, Icon, Item, Input } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';
// import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

const data = require('../../assets/data/products.json');
const prodCat = require('../../assets/data/categories.json');


const ProductContainer = () => {

  const [ products, setProducts ] = useState([]);
  const [ focus, setFocus ] = useState([]);
  // const [ productsFiltered, setProductsFiltered ] = useState('search products...');
  const [search, setSearch] = React.useState('');
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setinitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  useEffect(() => {
    setProducts(data);
    // setProductsFiltered(data);
    setSearch(search);
    setFocus(false);
    setCategories(prodCat);
    setActive(-1);
    setinitialState(data)
    return () => {
      setProducts([])
      setSearch([])
      setFocus();
      setCategories([])
      setProductsCtg(data);
      setActive()
      setinitialState()
    }
  }, [])
     
  // const searchProduct = () => {

  //     products.filter((item) => item.name.toLowerCase().includes(productsFiltered))
    
  // };

  // const searchProduct = (text) => {
  //   setSearch(
  //     products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
  //   );
  // };

    const openList = () => {
      setFocus(true);
    }

    const onBlur = () => {
      setFocus(false);
    }

      // Categories
      const changeCtg = (ctg) => {
        {
          ctg === "all"
            ? [setProductsCtg(initialState), setActive(true)]
            : [
                setProductsCtg(
                  products.filter((i) => i.category._id === ctg),
                  setActive(true)
                ),
              ];
        }
      };

    return (
    <Container>
      <View>
        <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
          <HStack alignItems="center" w="80%">
          <Input 
             onFocus={openList}
             onChangeText={(e) => setSearch(e)}
            // onChangeText={(text) => searchProduct(text)}
                     value={search}

            placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="6" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<MaterialIcons name="search" />} />
            
            } 
            />
        
            { focus == true ? 
              <Pressable style={{backgroundColor:'red', height:20, width:20}} onPress={onBlur}>
                <MaterialIcons name="close" /> 
              </Pressable>
            : null 
            }

          </HStack>
        </HStack>
        {focus == true ? (
          <SearchedProduct
             search={search}
          />
          // <View>
          //    {products.filter((item) => item.name.toLowerCase().includes(search)
          //         ).map((item) => (
          //           <View key={item.id}>
          //             <Text>{item.name}</Text>
          //             <Text>{item.description}</Text>
          //           </View>
          
          //         ))}
          // </View>
          
        ) : (
          <View style={{marginTop: 20}}>
            <View style={[styles.container]}>
              <View>
                {/* <Banner/> */}
              </View>
              <View>
              <CategoryFilter
                  categories={categories}
                  categoryFilter={changeCtg}
                  productsCtg={productsCtg}
                  active={active}
                  setActive={setActive}
                />
              </View>
              {productsCtg.length > 0 ? (
                    <View style={styles.listContainer}>
                        {productsCtg.map((item) => {
                            return(
                                <ProductList
                                    // navigation={props.navigation}
                                    key={item._id}
                                    item={item}
                                />
                            )
                        })}
                    </View>
            ) : (
           <View style={[styles.center, { height: '80%'}]}>
               <Text>No products found</Text>
           </View>
              )}
            </View>
           {/* <Button variant='outline' onPress={() => console.log('pressed')}>Click me</Button> */}
          </View>
        )}    
     </View> 
    </Container>      
    )
}

export default ProductContainer;
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    width:'100%',
    height:'100%'
  },
  listContainer: {
    height: '80%',
    width:'100%',
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
})
 
// import { StyleSheet, Text, View,TextInput,SafeAreaView } from 'react-native'
// import React, {useState} from 'react'
// import Banner from '../../Shared/Banner';

// const products = require('../../assets/data/products.json')

// const productContainer = () => {
//   const [search, setSearch] = React.useState('search products...');
//   console.log(products.filter(item=>item.name.toLowerCase().includes(search)));
//   console.log(products)

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={(e) => setSearch(e)}
//         value={search}
//       />
//       <View>
//         {products.filter((item) => item.name.toLowerCase().includes(search)
//         ).map((item) => (
//           <View key={item.id}>
//             <Text>{item.name}</Text>
//             <Text>{item.description}</Text>
//           </View>

//         ))}
//       </View>
//     </SafeAreaView>
//   )
// }

// export default productContainer

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });


  