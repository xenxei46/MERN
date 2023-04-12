import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Header from '../../Shared/Header';

// screens
import ProductContainer from './screens/products/productContainer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
