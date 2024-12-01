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
import { deleteprod } from "../../service/ProductManager";
import List from "./Components/List";
import { IconButton } from "react-native-paper";
import Svg, { Path, G } from "react-native-svg";

const UserList = ({ users, onButtonClick, refrech, token }: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const renderItem = ({ item }: any) => (
    <View style={styles2.itemContainer}>
      <Text style={styles2.username}>{item.name}</Text>

      <View style={styles2.itemContainer}>
        <TouchableOpacity
          style={styles2.button2}
          onPress={async () => {
            console.log("delete:", item.id);
            await deleteprod(item.id, token);
            refrech();
          }}
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
      keyExtractor={(item) => item.id}
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
import { getprod } from "../../service/ProductManager";
import { useRoute } from "@react-navigation/native";
export default function Home({ navigation }: { navigation: any }) {
  const [nbpage, setnbpage] = useState(0);
  const [productx, setproductx] = useState([]);
  const [state, setstate] = useState(false);
  const store = useStore();
  const route = useRoute<{
    key: string;
    name: string;
    params?: { Path?: string };
  }>();
  useEffect(() => {
    console.log("productx:", productx);
  }, [productx]);
  useEffect(() => {
    //@ts-ignore
    getprod(store.token, setproductx);
  }, [route.params, state]);
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
      <SafeAreaProvider style={{ flex: 0.9, marginTop: 50 }}>
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
        <UserList
          users={productx}
          refrech={() => setstate(!state)}
          onButtonClick={() => {}}
          token={store.token}
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
