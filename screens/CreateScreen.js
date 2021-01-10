import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import axios from "axios";

const API = "https://zzcloud88zz.pythonanywhere.com";
const API_CREATE = "/create";

export default function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 60 }}>
      <Text style={styles.header}>Create a new post!{"\n"}</Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
      ></TextInput>

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        multiline={true}
        style={styles.contentInput}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      ></TextInput>
      <Text>{"\n"}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={ createPost }
          style={[styles.button, styles.submitButton]}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function createPost() {
    Keyboard.dismiss();

    try {
      axios.post(API + API_CREATE, {
        title,
        content,
      });
      console.log("Post saved!");
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
  cancelButton: {
    backgroundColor: "red",
  },
});
