import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";

export default function IndexScreen({ navigation }) {
  return (
    <View style={commonStyles.container}>
      <Text>Account Screen</Text>
    <Button title="Sign out" onPress={signOut} />
  </View>
  );
  
  function signOut() {
    AsyncStorage.removeItem("token");
    navigation.navigate("SignIn");
  }
}

const styles = StyleSheet.create({});
