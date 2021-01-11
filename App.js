import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AccountScreen from "./screens/AccountScreen";
import CreateScreen from "./screens/CreateScreen";
import ShowScreen from "./screens/ShowScreen";
import EditScreen from "./screens/EditScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  async function loadToken() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setSignedIn(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadToken();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName={signedIn ? "Account" : "SignIn"}>
        <Stack.Screen component={AccountScreen} name="Account" options={{ title: 'Blog App' }}/>
        <Stack.Screen component={SignInScreen} name="SignIn" options={{ headerShown: false }}/>
        <Stack.Screen component={SignUpScreen} name="SignUp" options={{ title: 'Sign Up' }}/>
        <Stack.Screen component={CreateScreen} name="createPost" options={{ title: 'Create Post' }}/>
        <Stack.Screen component={ShowScreen} name="showPost" options={{ title: 'Your Post' }}/>
        <Stack.Screen component={EditScreen} name="editPost" options={{ title: 'Edit Post' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
