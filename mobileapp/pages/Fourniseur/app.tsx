//@ts-nocheck

import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import Collection from "./Collection";
import Profile from "./Profile";
import { View } from "react-native";
import Navbar from "./Components/Navbar";
import { useNavigation, useRoute } from "@react-navigation/native";

const MainNormalStack = createNativeStackNavigator();

// Utility function to convert screen names to numerical values for comparison
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

// Utility function to determine animation direction
function selectIcon(
  name: string,
  prevName: string,
  currentAnimation: string
): string {
  if (name === prevName) {
    return currentAnimation;
  } else {
    return convert(name) > convert(prevName)
      ? "slide_from_right"
      : "slide_from_left";
  }
}

export default function MainNormalStackScreen() {
  const navigation = useNavigation<any>();
  const [currentAnimation, setCurrentAnimation] =
    useState<string>("slide_from_right");
  const [screenHistory, setScreenHistory] = useState<string[]>([
    "Homenormalx",
    "Homenormalx",
  ]);

  const route = useRoute<{
    key: string;
    name: string;
    params?: { Path?: string };
  }>();

  useEffect(() => {
    const newScreenName = route.params?.Path ?? route.name;
    setScreenHistory([newScreenName, screenHistory[0]]);
    setCurrentAnimation(
      selectIcon(newScreenName, screenHistory[0], currentAnimation)
    );
  }, [route]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFE4C5" }}>
      <View style={{ flex: 0.9, backgroundColor: "#FFE4C5" }}>
        <MainNormalStack.Navigator>
          <MainNormalStack.Screen
            name="Homenormalx"
            component={Home}
            options={{
              headerShown: false,
              animation: "slide_from_left",
            }}
          />
          <MainNormalStack.Screen
            name="Collactionnormalx"
            component={Collection}
            options={{
              headerShown: false,
              animation: currentAnimation,
            }}
          />
          <MainNormalStack.Screen
            name="Profilenormalx"
            component={Profile}
            options={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          />
        </MainNormalStack.Navigator>
      </View>
      <Navbar />
    </View>
  );
}
