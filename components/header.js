import { useContext } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

    const percentageDone = useSelector((state)=>state.percentageDoneReducer.percentageDone);
    
    return(
        <View style={styles.header}>
            <Text style={[styles.logo]}>TO-DO-LIST</Text>
            <Text style={styles.percentageDone}>{`${percentageDone}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'green',
        paddingTop: StatusBar.currentHeight,
        height: 90,
        backgroundColor: '#D1E7E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        fontFamily: 'VinaSans',
        color: '#00796B',
        fontSize: 30,
        marginStart: 10
    },
    percentageDone:{
        color:'white',
        marginEnd:10,
        fontFamily: 'VinaSans',
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor:'#B2DFDB',
        borderRadius: 10,
        fontSize: 18
    }
})

export default Header;