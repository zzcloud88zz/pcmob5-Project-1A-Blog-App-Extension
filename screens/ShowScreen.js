import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { commonStyles } from "../styles/commonStyles";

export default function ShowScreen({ route, navigation }) {

  const API = "https://zzcloud88zz.pythonanywhere.com";
  const API_EDITED = "/posts/";

  // Create edit button on header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <AntDesign
            onPress={() => navigation.navigate("editPost", {id, title, content})}
            name="edit"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  });

  // Post details
  const id = route.params.id;
  const [title, setTitle] = useState(route.params.title);
  const [content, setContent] = useState(route.params.content);

  return (
    <View style={{ flex: 1, marginTop: 60 }}>
      <Text style={styles.header}>Post {id}{"\n"}</Text>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.label}>Content:</Text>
      <Text style={styles.content}>{content}{"\n"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
    textDecorationLine: "underline",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    alignContent: "flex-start",
  },
  title: {
    margin: 20,
    width: "80%",
    padding: 10,
    fontSize: 18,
  },
  content: {
    margin: 20,
    width: "80%",
    height: "20%",
    padding: 10,
    fontSize: 18,
  },
});
