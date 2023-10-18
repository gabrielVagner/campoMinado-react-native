import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15,
    difficultLevel: 0.1,
    getColumnsAmount(){
        return Math.floor(Dimensions.get('window').width/this.blockSize)
    },
    getRowsAmount(){
        return Math.floor((Dimensions.get('window').height * (1 - this.headerRatio))/this.blockSize)
    }

}

export default params