//@ts-nocheck

import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import Collection from "./Collection";
import Profile from "./Profile";
import Produit from "./produit";
import { View } from "react-native";
import Navbar from "./Components/Navbar";
import { useNavigation, useRoute } from "@react-navigation/native";

const MainNormalStack = createNativeStackNavigator();

function selectAnimation(
  name: string,
  prevName: string,
  currentAnimation: string
): string {
  if (name === prevName) {
    return currentAnimation;
  } else {
    return "fade";
  }
}

export default function MainNormalStackScreen() {
  const navigation = useNavigation<any>();
  const [currentAnimation, setCurrentAnimation] = useState<string>("fade");
  const [prevScreen, setPrevScreen] = useState<string>("Homenormalx");

  const route = useRoute<{
    key: string;
    name: string;
    params?: { Path?: string };
  }>();

  useEffect(() => {
    const newScreenName = route.params?.Path ?? route.name;
    const newAnimation = selectAnimation(
      newScreenName,
      prevScreen,
      currentAnimation
    );
    setPrevScreen(newScreenName);
    setCurrentAnimation(newAnimation);
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
              animation: "fade",
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
            name="Produitnormalx"
            component={Produit}
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
              animation: "fade",
            }}
          />
        </MainNormalStack.Navigator>
      </View>
      <Navbar />
    </View>
  );
}
