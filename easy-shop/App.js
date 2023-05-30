import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Shared/Header';
import { LogBox } from "react-native";

// screens
import ProductContainer from './screens/products/productContainer';
import { NativeBaseProvider } from 'native-base';
LogBox.ignoreAllLogs(true);

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
    width: '100%',
    height:'100%',
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
