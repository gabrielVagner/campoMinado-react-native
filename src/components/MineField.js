import { StyleSheet, Text, View} from 'react-native';
import { toOpen } from '../logic';
import Field from './Field';



export default function MineField({board, toOpenField}){
    //console.log(typeof board)
    const rows = board.map((row, r)=>{
        const columns = row.map((column, c)=>{
            return <Field {...column} key={c} toOpen={()=>toOpenField(r, c)}/>
        })
        return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
    })
    
    
    
    return(
        


        <View style={styles.container}>{rows}</View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        
    },

})