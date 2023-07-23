import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { PostImage, RouteStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImagesNavigationProps = NativeStackNavigationProp<RouteStackParams, 'Details'>

const ToDaysImage: FC<PostImage> =( {date, explanation,hdurl,media_type, service_version, title, url})=>{
    const {navigate } = useNavigation<PostImagesNavigationProps>()
    
    const handleViewPress = ()=>{
        navigate('Details', {title, date, url, explanation})
    }
    
    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri: url}} style={styles.image}/>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.btnContainer}>
            <Button title="view" onPress={handleViewPress}/>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#2c449d",
        marginVertical:16,
        marginHorizontal:24,
        borderRadius:32,
        padding:16
    },
    image:{
        width: '100%',
        height:190,
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:32
    },
    btnContainer:{
       alignItems:'flex-end'
    },
    title:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:28,
        marginVertical:12
    },
    date:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
        marginVertical:12
    }
})

export default ToDaysImage;