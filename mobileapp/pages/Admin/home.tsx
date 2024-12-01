//@ts-nocheck
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
import Svg, { Path } from "react-native-svg";
import { Update } from "../../service/usersManager";
const UserList = ({ users, onButtonClick, refrech, token }: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const renderItem = ({ item }: any) => (
    <View style={styles2.itemContainer}>
      <Text style={styles2.username}>{item.username}</Text>
      {item.types === "user" ? (
        <TouchableOpacity
          style={styles2.button}
          onPress={() => Update(token, item.id, "prov", refrech)}
        >
          <Text style={styles2.buttonText}>Set Seller</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles2.button}
          onPress={() => Update(token, item.id, "user", refrech)}
        >
          <Text style={styles2.buttonText}>Set User</Text>
        </TouchableOpacity>
      )}
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
import useStore from "../../service/store";
import { getusers } from "../../service/usersManager";
export default function Home() {
  const [nbpage, setnbpage] = useState(0);
  const [data, setdata] = useState([]);
  const [refrech, setrefrech] = useState(false);
  const app = useStore();
  useEffect(() => {
    getusers(app.token, setdata);
  }, [refrech]);
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
            {"\n"}Users
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
        <UserList
          users={data}
          token={app.token}
          refrech={() => setrefrech(!refrech)}
          onButtonClick={() => {}}
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
    width: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
