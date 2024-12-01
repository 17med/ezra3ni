import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import Navbar from "./Components/Navbar";
import {
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import List from "./Components/List";
import { IconButton } from "react-native-paper";
import Svg, { Path, G } from "react-native-svg";
const UserList = ({ users, onButtonClick }: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const renderItem = ({ item }: any) => (
    <View style={styles2.itemContainer}>
      <Text style={styles2.username}>{item.username}</Text>

      <View style={styles2.itemContainer}>
        <TouchableOpacity
          style={styles2.button}
          onPress={() => onButtonClick(item.username)}
        >
          <Svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <Path
              d="M10 0L19.5 5.5V16.5L10 22L0.5 16.5V5.5L10 0ZM10 2.311L2.5 6.653V15.347L10 19.689L17.5 15.347V6.653L10 2.311ZM10 15C8.93913 15 7.92172 14.5786 7.17157 13.8284C6.42143 13.0783 6 12.0609 6 11C6 9.93913 6.42143 8.92172 7.17157 8.17157C7.92172 7.42143 8.93913 7 10 7C11.0609 7 12.0783 7.42143 12.8284 8.17157C13.5786 8.92172 14 9.93913 14 11C14 12.0609 13.5786 13.0783 12.8284 13.8284C12.0783 14.5786 11.0609 15 10 15ZM10 13C10.5304 13 11.0391 12.7893 11.4142 12.4142C11.7893 12.0391 12 11.5304 12 11C12 10.4696 11.7893 9.96086 11.4142 9.58579C11.0391 9.21071 10.5304 9 10 9C9.46957 9 8.96086 9.21071 8.58579 9.58579C8.21071 9.96086 8 10.4696 8 11C8 11.5304 8.21071 12.0391 8.58579 12.4142C8.96086 12.7893 9.46957 13 10 13Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles2.button2}
          onPress={() => onButtonClick(item.username)}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M20.25 6.75L18.9061 19.6753C18.8631 20.0403 18.6877 20.3767 18.4131 20.6209C18.1385 20.8651 17.7839 21 17.4164 21H6.58406C6.2166 21 5.86193 20.8651 5.58733 20.6209C5.31273 20.3767 5.13732 20.0403 5.09438 19.6753L3.75 6.75"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M21.75 3H2.25C1.83579 3 1.5 3.33579 1.5 3.75V6C1.5 6.41421 1.83579 6.75 2.25 6.75H21.75C22.1642 6.75 22.5 6.41421 22.5 6V3.75C22.5 3.33579 22.1642 3 21.75 3Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M14.625 11.25L9.375 16.5M14.625 16.5L9.375 11.25"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.username}
    />
  );
};

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

export default function Home({ navigation }: { navigation: any }) {
  const [nbpage, setnbpage] = useState(0);
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }
  const users = [
    { username: "user1", type: "user" },
    { username: "user2", type: "user" },
    { username: "user3", type: "prov" },
  ];
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
            Control ur
            {"\n"}Products
          </Text>

          <IconButton
            style={{ marginTop: -0 }}
            icon={() => (
              <Svg viewBox="-0.48 -0.48 24.96 24.96" fill="none">
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></Path>
                  <Path
                    d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></Path>
                </G>
              </Svg>
            )}
            size={35}
            onPress={() =>
              navigation.navigate("Homenormal", {
                screen: "modal",
                Path: "modal",
              })
            }
          />
        </View>
        <UserList users={users} onButtonClick={() => {}} />

          
      </SafeAreaProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: "85%",
    height: 120,
    marginTop: 20,
    backgroundColor: "#FFE4C5",
    borderWidth: 2,
    borderColor: "#FFE4C5",
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
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFE4C5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "#FFE4C5",
    borderRadius: 5,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    height: 40,
    alignContent: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#007451",
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  button2: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    height: 40,
    alignContent: "center",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    paddingLeft: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
