import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import axios from "axios";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_EDIT = "/posts/";

export default function EditScreen({ route, navigation }) {
  const id = route.params.id;
  const [title, setTitle] = useState(route.params.title);
  const [content, setContent] = useState(route.params.content);

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 60 }}>
      <Text style={styles.header}>Edit post {id}!{"\n"}</Text>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      ></TextInput>

      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        multiline={true}
        style={styles.contentInput}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      ></TextInput>
      <Text>{"\n"}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => editPost()}
          style={[styles.button, styles.submitButton]}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function editPost() {
    Keyboard.dismiss();

    try {
      axios.put(API + API_EDIT + id, {
        title,
        content,
      })
      console.log("Post edited!");
      navigation.navigate("Account");
    } catch (error) {
      console.log(error.response);
    }
  }
}

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  label: {
    fontSize: 20,
    alignContent: "flex-start",
  },
  titleInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderColor: "#ccc",
    fontSize: 18,
  },
  contentInput: {
    margin: 20,
    borderWidth: 1,
    width: "80%",
    height: "20%",
    padding: 10,
    borderColor: "#ccc",
    fontSize: 18,
  },
  buttons: {
    width: "60%",
  },
  button: {
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "orange",
  },
});
