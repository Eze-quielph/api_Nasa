import React, {FC}  from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { PostImage,RouteStackParams } from "../../types";
import {useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImagesNavigationProps = NativeStackNavigationProp<RouteStackParams, 'Details'>

const PostImagesCard: FC<PostImage> =({title, date, url, explanation})=>{
    const {navigate} = useNavigation<PostImagesNavigationProps>()

    const handleViewPress = ()=>{
        navigate('Details', {title, date, url, explanation})
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{date}</Text>
            <View style={styles.btnContainer}>
                <Button title="view" onPress={handleViewPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(10,39,113,2551)",
        borderRadius:20,
        marginBottom:12,
        padding: 16
    },
    text:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        marginBottom:12
    },
    btnContainer:{
        alignItems:"flex-end",
        marginBottom:5
    }
})

export default PostImagesCard;