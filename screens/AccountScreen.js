import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DataFetching from "./components/DataFetching";

export default function AccountScreen({ navigation }) {

  // Create post button on header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ paddingRight: 10 }}>
          <Entypo
            onPress={createPost}
            name="new-message"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  });

  function createPost() {
    navigation.navigate("createPost");
  }

  // Listview of posts
  return (
    <View style={styles.container}>
      <DataFetching navigation={navigation} />
      <Button title="Sign out" onPress={signOut} />
    </View>
    
  );

  // Signout function
  function signOut() {
    AsyncStorage.removeItem("token");
    navigation.navigate("SignIn");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  list: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  }
});
