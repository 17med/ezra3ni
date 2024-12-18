import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import Navbar from "./Components/Navbar";
import useStore from "../../service/store";
import {
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import List from "./Components/List";
import { IconButton } from "react-native-paper";
import { getprodAll } from "../../service/ProductManager";
function Mybtn({
  IsActive,
  text,
  onclick,
}: {
  IsActive: boolean;
  text: string;
  onclick: any;
}) {
  const stylex = IsActive ? styles.btnactive : styles.btninactive;
  return (
    <TouchableOpacity style={stylex} onPress={onclick}>
      <Text style={{ color: "black", textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
}

import Svg, { Path } from "react-native-svg";
export default function Home() {
  const [nbpage, setnbpage] = useState(0);
  const [product, setproduct] = useState([]);
  const store = useStore();
  useEffect(() => {
    //@ts-ignore
    getprodAll(store.token, setproduct);
  }, []);
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  return (
    <View style={{ backgroundColor: "#FFE4C5", display: "flex", flex: 1 }}>
      <SafeAreaProvider style={{ marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text
            variant="titleLarge"
            style={{ fontFamily: "Poppins_300Light", marginLeft: 20 }}
          >
            Find your
            {"\n"}favorite plants
          </Text>

          <IconButton
            style={{ marginTop: -0 }}
            icon={() => (
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Path
                  d="M23.0313 23.0313L29.375 29.375M13.75 26.875C6.50125 26.875 0.625 20.9988 0.625 13.75C0.625 6.50125 6.50125 0.625 13.75 0.625C20.9988 0.625 26.875 6.50125 26.875 13.75C26.875 20.9988 20.9988 26.875 13.75 26.875Z"
                  stroke="black"
                />
              </Svg>
            )}
            size={35}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.box}>
            <View>
              <Text
                variant="headlineLarge"
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  marginLeft: 13,
                  marginTop: 20,
                  color: "white",
                }}
              >
                30% off
              </Text>
              <Text
                variant="titleLarge"
                style={{
                  fontFamily: "Poppins_300Light",
                  marginTop: -10,
                  marginLeft: 18,
                  fontSize: 11,
                  color: "white",
                }}
              >
                02-03 DECEMBER
              </Text>
            </View>
            <View>
              <Svg
                width="246"
                height="105"
                viewBox="0 0 246 105"
                fill="none"
                style={{ marginLeft: -60, marginTop: -10 }}
              >
                <Path
                  d="M0 1C34.3333 1.5 100.7 13.3 91.5 56.5C82.3 99.7 190.333 105.833 245.5 103.5"
                  stroke="#FFDFBA"
                />
              </Svg>
              <Animatable.View
                animation="fadeIn"
                duration={1500} // Animation duration in milliseconds
              >
                <Image
                  source={require("../../assets/Plant.png")}
                  style={{
                    width: 140,
                    height: 140,
                    marginTop: -120,
                    marginLeft: 20,
                  }}
                />
              </Animatable.View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Mybtn
            IsActive={nbpage == 0}
            text={"All"}
            onclick={() => {
              setnbpage(0);
            }}
          />
          <Mybtn
            IsActive={nbpage == 1}
            text={"Indoor"}
            onclick={() => {
              setnbpage(1);
            }}
          />
          <Mybtn
            IsActive={nbpage == 2}
            text={"Outdoor"}
            onclick={() => {
              setnbpage(2);
            }}
          />
          <Mybtn
            IsActive={nbpage == 3}
            text={"Popular"}
            onclick={() => {
              setnbpage(3);
            }}
          />
        </View>
        <List
          token={
            // @ts-ignore
            store.token
          }
          plants={product}
        />
      </SafeAreaProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: "85%",
    height: 120,
    marginTop: 20,
    backgroundColor: "#00745180",
    borderWidth: 2,
    borderColor: "#00745180",
    borderRadius: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  btnactive: {
    backgroundColor: "#FFE4C5",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: 70,
    borderRadius: 30,
    display: "flex",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btninactive: {
    backgroundColor: "#FFE4C5",
    borderColor: "black",
    borderWidth: 0,
    padding: 10,
    width: 70,
    marginLeft: 10,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
