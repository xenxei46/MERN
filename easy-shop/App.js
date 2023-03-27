import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// screens
import ProductContainer from './screens/products/productContainer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello native</Text>
      <StatusBar style="auto" /> */}
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
