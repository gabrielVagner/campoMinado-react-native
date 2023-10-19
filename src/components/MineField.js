import { StyleSheet, Text, View} from 'react-native';
import Field from './Field';



export default function MineField({board}){
    const rows = board.map((row, r)=>{
        const columns = row.map((column, c)=>{
            return <Field {...column} key={c}/>
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