import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button } from 'react-native';
import { useState } from 'react';
import params from './src/params'
import MineField from './src/components/MineField';
import {createMinedBoard, toOpen, cloneBoard} from './src/logic';


export default function App() {
  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmount()
  const qntMines = Math.ceil((rows*columns)*params.difficultLevel)
  const b = createMinedBoard(rows, columns , qntMines)
  const [board, setBoard] = useState(b)

  const openField = (r, c)=>{
    const newBoard = cloneBoard(board)
    toOpen(newBoard, r, c)
    setBoard(newBoard)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'white'}}>{rows}x{columns}</Text>
        <Button onPress={()=>console.log(board)} title='logBoard'/>
        <Button onPress={()=>setBoard(b)} title='reset'/>
      </View>

      <View style={styles.mineField}>
        <MineField board = {board} toOpenField={openField}/>
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
  },
  mineField:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey'

  }
});
