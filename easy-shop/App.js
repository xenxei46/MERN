import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Shared/Header';

// screens
import ProductContainer from './screens/products/productContainer';
import { NativeBaseProvider } from 'native-base';
// import { isIphoneX } from 'react-native-iphone-x-helper'
// import type { KeyboardAwareInterface } from './KeyboardAwareInterface'  

// const _KAM_DEFAULT_TAB_BAR_HEIGHT: number = isIphoneX() ? 83 : 49

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Header/>
      <ProductContainer/>
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // width: '100%',
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
