import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Hello, Greet, Address } from './components/Hello';
import Header from './components/Header';

export default function App() {
  return (
      <View style={styles.container}>
           <Header title="example"/> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body : {
    margin: '0px'
  },
  greet: {
    flex: 2,
    backgroundColor: '#e2e2e2',
  }
});
