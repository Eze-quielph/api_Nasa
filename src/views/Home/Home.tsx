import React,{useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";
import Fetch from "../../utils/Fetch";
import ToDaysImage from "../../components/ToDaysImage/ToDaysImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import Last5DaysImages from "../../components/Last5DaysImages/Last5DaysImages";

const Home = ()=>{

    const [data, setData] = useState<PostImage>({});
    const [last5DaysImages, setLast5DaysImages]= useState<PostImage[]>([])

    //Fetcg Image
    useEffect(()=>{
        const loadTodaysImage = async ()=>{
            try {
                const toDaysImage= await  Fetch()
                setData(toDaysImage);
                
            } catch (error) {
                setData({})
            }
        }
        loadTodaysImage().catch(null)
    },[])

    //Fetch ultimate 5 days
    useEffect(()=>{
        const loadLast5DaysImages = async ()=>{
            try {
                const date = new Date()
                const todaysDate = format(date, 'yyyy-MM-dd');
                const last5Days = format(sub(date, {days: 5}), 'yyyy-MM-dd')
                
                const lastFiveDaysImagesResponse = await Fetch(`&start_date=${last5Days}&end_date=${todaysDate}`)
                setLast5DaysImages(lastFiveDaysImagesResponse)
            } catch (error) {
                setLast5DaysImages([])
            }
        }
        loadLast5DaysImages().catch(null)
    },[])

    return(
        <View style={style.container}>
            <Header/>
            <ToDaysImage {...data}/>
            <Last5DaysImages post={last5DaysImages}/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        backgroundColor: 'rgba(7,26,93,255)',
        textAlign:"center"
    }
})

export default Home;