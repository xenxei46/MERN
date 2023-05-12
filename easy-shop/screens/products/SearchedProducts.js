import React from 'react';
import { View, StyleSheet, Dimensions, Pressable, Image,} from 'react-native'
import {Text , FlatList, Avatar, Button} from 'native-base';

const data = require('../../assets/data/products.json');

var { width } = Dimensions.get("window");

const SearchedProduct = ({productsFiltered}) => {
    // const { productsFiltered } = props;
    return(
        <View style={{width:width}}>
            {productsFiltered.length > 0 ? (
                <View>
                    <FlatList
                        data={data}
                            onPress={() => {
                                props.navigation.navigate("Product Detail", {item: item})
                            }}
                        renderItem={({item}) => 
                        <View style={{flex:1, flexDirection:'row', backgroundColor:'red',height:80 }} key={item.id}
                        item={item}>
                            <View style={{backgroundColor:'green', height:'100%', flex:1 }}>
                                <Avatar size="48px" source={{
                                                uri: item.image ?  
                                                item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'} 
                                 } />
                                {/* <Image
                                    source={item.image ?  
                                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'} style={{height:50, width:50}}
                                /> */}
                            </View>
                            <View style={{flex:4, height:'100%'}}> 
                                <Text style={{fontWeight:'500'}}>{item.name}</Text>
                                <Text style={{color:'grey', fontSize:10, }}>{item.description}</Text>
                            </View>
                        </View>
                        
                        // key={}
                        }
                        keyExtractor={item => item._id.$oid}  
                    />
                </View>
                )
             : (
                <View style={styles.center}>
                    <Text style={{ alignSelf:  'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </View>
    );
};

export default SearchedProduct;

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    container: {
    width: '200%',
    height: '100%',
    backgroundColor: 'grey'
    }
})

