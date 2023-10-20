import {View} from 'react-native';
import Field from './Field';



export default function MineField({board, toOpenField, toFlagField}){
    const rows = board.map((row, r)=>{
        const columns = row.map((column, c)=>{
            return <Field {...column} key={c} toOpen={()=>toOpenField(r, c)} toFlag={()=>toFlagField(r,c)}/>
        })
        return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
    })
    return(
        <View>{rows}</View>
    )
}
