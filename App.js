import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import params from './src/params'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <Text>{params.getColumnsAmount()} x {params.getRowsAmount()}</Text>
      
      <View>
        
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header:{
    height: Dimensions.get('window').height * params.headerRatio,
    backgroundColor: '#000'

  }
});
