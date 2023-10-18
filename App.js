import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <Text>{params.getColumnsAmount()} x {params.getRowsAmount()}</Text>
      
      <Field/>
      <Field opened/>
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={5}/>
      <Field opened nearMines={8}/>
      <Field opened mined/>
      <Field mined/>
      <Field opened mined exploded/>
      <Field flagged/>
      <Field flagged opened/>
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
