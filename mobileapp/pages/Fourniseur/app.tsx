//@ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import Collection from "./Collection";
import Profile from "./Profile";
import { View } from "react-native";
import Navbar from "./Components/Navbar";
import { useRoute } from "@react-navigation/native";
import Modal from "./Model";

const MainNormalStack = createNativeStackNavigator();

function convert(name: string): number {
  switch (name) {
    case "Homenormalx":
      return 1;
    case "Collactionnormalx":
      return 2;
    case "Profilenormalx":
      return 3;
    default:
      return 0;
  }
}

function selectIcon(
  name: string,
  prevName: string,
  currentAnimation: string
): string {
  return name === prevName
    ? currentAnimation
    : convert(name) > convert(prevName)
    ? "slide_from_right"
    : "slide_from_left";
}

export default function MainNormalStackScreen() {
  const [currentAnimation, setCurrentAnimation] =
    useState<string>("slide_from_right");
  const prevScreenNameRef = useRef<string>("Homenormalx");
  const route = useRoute<{
    key: string;
    name: string;
    params?: { Path?: string };
  }>();

  useEffect(() => {
    const newScreenName = route.params?.Path ?? route.name;
    const prevScreenName = prevScreenNameRef.current;

    setCurrentAnimation(
      selectIcon(newScreenName, prevScreenName, currentAnimation)
    );
    prevScreenNameRef.current = newScreenName;
  }, [route.params?.Path, route.name, currentAnimation]);

  const st = route.params?.Path === "modal" ? { flex: 0.1 } : { flex: 0.1 };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFE4C5" }}>
      <View style={{ flex: 0.9, backgroundColor: "#FFE4C5" }}>
        <MainNormalStack.Navigator>
          <MainNormalStack.Screen
            name="Homenormalx"
            component={Home}
            options={{ headerShown: false, animation: "slide_from_left" }}
          />
          <MainNormalStack.Screen
            name="Collactionnormalx"
            component={Collection}
            options={{ headerShown: false, animation: currentAnimation }}
          />
          <MainNormalStack.Screen
            name="Profilenormalx"
            component={Profile}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <MainNormalStack.Screen
            name="modal"
            component={Modal}
            options={{
              presentation: "transparentModal",
              animation: "fade",
              headerShown: false,
            }}
          />
        </MainNormalStack.Navigator>
      </View>
      <View style={st}>
        <Navbar />
      </View>
    </View>
  );
}
