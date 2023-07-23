import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.image} source={require('../../assets/Nasa_logo.png') } />
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems:"center",
        backgroundColor: 'rgba(7,26,93,255)'
    },
    leftContainer:{
        flex: 1,
        alignItems:"flex-start"
    },
    title:{
        fontSize:20,
        color:"#ffff"
    },
    rightContainer:{
        flex: 1,
        alignItems:"flex-end"
    },
    image:{
        width:60,
        height:60
    },
})

export default Header;