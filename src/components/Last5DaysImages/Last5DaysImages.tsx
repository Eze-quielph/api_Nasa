import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageType, RouteStackParams, } from "../../types";
import PostImagesCard from "../PostImages/PostImages";
import {useNavigation} from '@react-navigation/native'

interface Props {
  post?: PostImageType[];
}

type PostImagesNavigationProps = NativeStackNavigationProp<RouteStackParams, 'Details'>

const Last5DaysImages: FC<Props> = ({ post }) => {
    const {navigate } = useNavigation<PostImagesNavigationProps>()
    
    const handleViewPress = ()=>{
        navigate('Details', {title, date, url, explanation})
    }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {post?.map((postImage) => (
          <PostImagesCard key={`post-images${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
    textAlign:"center"
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default Last5DaysImages;
