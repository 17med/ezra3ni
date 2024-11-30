import React, { useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { CommonActions } from "@react-navigation/native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Toast from "react-native-toast-message";
import useUserStore from "./service/store";
import Homenormal from "./pages/normaluser/app";
import Main from "./pages/Login/main";
import Select from "./pages/Login/Select";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Selectfromtype from "./pages/Select";
import { useNavigation } from "@react-navigation/native";
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "black",
    },
  };

  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: "#FFE4C5" }}>
          <StatusBar style="dark" />
          <Stack.Navigator>
            <Stack.Screen
              name="main"
              component={Main}
              options={{
                animation: "fade",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="select"
              component={Select}
              options={{
                animation: "fade",
                animationTypeForReplace: "pop",
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                animation: "slide_from_right",
                animationTypeForReplace: "pop",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                animation: "slide_from_right",
                animationTypeForReplace: "pop",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Homenormal"
              component={Selectfromtype}
              options={{
                animation: "slide_from_bottom",
                animationTypeForReplace: "pop",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </PaperProvider>
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
