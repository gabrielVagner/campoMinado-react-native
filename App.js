import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button, Alert } from 'react-native';
import { useState } from 'react';
import params from './src/params'
import MineField from './src/components/MineField';
import {createMinedBoard, cloneBoard, toOpen, toFlag, mineExploded, showMines, penddingFields} from './src/logic';


export default function App() {
  const rows = params.getRowsAmount()
  const columns = params.getColumnsAmount()
  const qntMines = Math.ceil((rows*columns)*params.difficultLevel)
  const [board, setBoard] = useState(createMinedBoard(rows, columns , qntMines))

  const openField = (r, c)=>{
    const newBoard = cloneBoard(board)
    toOpen(newBoard, r, c)
    const lose = mineExploded(newBoard)
    const win = !mineExploded(newBoard) && !penddingFields(newBoard)
    //setBoard(newBoard)
    if(lose){
      showMines(newBoard)
      Alert.alert('Voce Perdeu', '', [{
        onPress: ()=>setBoard(createMinedBoard(rows, columns , qntMines)),
        text: 'Reiniciar'
      }]) 
    } 
    if(win){
      showMines(newBoard)
      Alert.alert('Voce Ganhou', '', [{
        onPress: ()=>setBoard(createMinedBoard(rows, columns , qntMines)),
        text: 'Reiniciar'
      }]) 
    }
    setBoard(newBoard)
  }

  const flagField = (r, c)=>{
    const newBoard = cloneBoard(board)
    toFlag(newBoard, r, c)
    const win = !mineExploded(newBoard) && !penddingFields(newBoard)
    if(win){
      showMines(newBoard)
      Alert.alert('Voce Ganhou', '', [{
        onPress: ()=>setBoard(createMinedBoard(rows, columns , qntMines)),
        text: 'Reiniciar'
      }]) 
    }
    setBoard(newBoard)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/*<Button onPress={()=>console.log(board)} title='logBoard'/>*/}
        <Button onPress={()=>setBoard(createMinedBoard(rows, columns , qntMines))} title='reset'/>
      </View>

      <View style={styles.mineField}>
        <MineField board = {board} toOpenField={openField} toFlagField={flagField}/>
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
    backgroundColor: '#000',
    flexDirection: 'column-reverse'
  },
  mineField:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'grey'

  }
});
