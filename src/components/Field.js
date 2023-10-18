import { StyleSheet, Text, View} from 'react-native';
import params from '../params'
import Mine from './Mine';
import Flag from './Flag';

export default function Field({opened, mined, nearMines, exploded, flagged}){
    const styleField = [styles.field]
    if(opened) styleField.push(styles.opened)
    if(exploded) styleField.push(styles.exploded)
    if(!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if(nearMines>0){
        if(nearMines == 1 ) color = 'blue'
        if(nearMines == 2 ) color = 'green'
        if(nearMines > 2 && nearMines < 6 ) color = 'red'
        if(nearMines >= 6 ) color = 'black'
    }


    return(
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
            <Text style={[styles.label, {color: color}]}>
                {nearMines}
            </Text> : false }
            {mined && opened? <Mine/>:false}
            {flagged && !opened? <Flag/>:false}
        </View>
    )

}


const styles = StyleSheet.create({
    field:{
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize,
        
    },
    regular: {
        borderWidth: params.borderSize,
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened:{
        borderWidth: params.borderSize - 1.5,
        backgroundColor: '#999',
        borderColor: '#111',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        fontSize: params.fontSize,
        fontWeight: 'bold',
    },
    exploded:{
        backgroundColor:'red',
        borderColor: 'red'
    }
  });
  