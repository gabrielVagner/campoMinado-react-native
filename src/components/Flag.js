import { StyleSheet, View} from 'react-native';

export default function Flag() {
    return(
        <View style={styles.container}>
            <View style={styles.flagPole}/>
            <View style={styles.flag}/>
            <View style={styles.base1}/>
            <View style={styles.base2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 2
    },
    flagPole:{
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: 'black',
        marginLeft: 9,
    },
    flag:{
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: 'red',
        marginLeft: 3,
    },
    base1:{
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,

    },
    base2:{
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
        
    }
    
});
  