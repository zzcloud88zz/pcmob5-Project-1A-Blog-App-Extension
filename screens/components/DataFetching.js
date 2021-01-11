import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_ALLPOSTS = "/posts";

export default function DataFetching({ navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get(API + API_ALLPOSTS)
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    })

    return (
        <View>
            {posts.map(post => (
              <TouchableOpacity onPress={() => navigation.navigate("showPost", post)}>
                <Text key={post.id} style={styles.list}>
                  Post {post.id}.   {post.title}
                  <TouchableOpacity onPress={() => deletePost(post.id)} style={{paddingLeft: 80}}>
                    <AntDesign name="delete" size={30} color="maroon" />
                  </TouchableOpacity>
                </Text>
              </TouchableOpacity>
            ))}
        </View>
    )

    function deletePost(id) {
      Alert.alert(
        "Hold On!",
        "Are you sure you want to delete?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => 
            axios.delete("https://zzcloud88zz.pythonanywhere.com/posts/" + id)
            .then(response => {
              console.log(response.data)
              const refresh = posts.filter(post=>post.id !== id)
              setPosts(refresh)
            })
        }],
        { cancelable: false }
      );
    }
  }

  const styles = StyleSheet.create({
    list: {
      fontSize: 30,
      padding: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomColor: "black",
    }
  });