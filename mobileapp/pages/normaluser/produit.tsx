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
import { Button } from "react-native-paper";
import { deleteproduct } from "../../service/CarManager";
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
import useUserStore from "../../service/store";
import Svg, { Path } from "react-native-svg";
import { CarManager, passorder } from "../../service/CarManager";
export default function Home({ navigation }: any) {
  const appstore = useUserStore();

  const [product, setproduct] = useState([]);
  const [nbpage, setnbpage] = useState(0);
  const [refx, setrefx] = useState(false);
  useEffect(() => {
    //@ts-ignore
    CarManager(appstore.token, setproduct);
  }, [refx]);
  useEffect(() => {
    console.log("pto", product);
  }, [product]);
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  const data = [
    { id: "1", name: "Coffee" },
    { id: "2", name: "Tea" },
    { id: "3", name: "Juice" },
    { id: "4", name: "Milk" },
    { id: "5", name: "Water" },
  ];

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <View style={styles.item}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {item.product.name}{" "}
            <Text style={{ fontStyle: "blod" }}>X{item.quantity}</Text>
          </Text>

          <Text style={styles.text}>{item.product.price}$</Text>
        </View>
      </View>
      <Button
        mode="contained"
        onPress={async () => {
          await deleteproduct(appstore.token, item.product.id);
          setrefx(!refx);
        }}
        labelStyle={{
          fontSize: 13,
          fontFamily: "Poppins_300Light",
        }}
        textColor="#FFE4C5"
        buttonColor="red"
        style={{
          width: 120,
          marginTop: 20,
          borderRadius: 20,
        }}
      >
        Remove
      </Button>
    </View>
  );

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
            Look what
            {"\n"}You got !
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
            flex: 1,
          }}
        >
          <FlatList
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
            }}
            data={product}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />

          <Button
            mode="contained"
            onPress={async () => {
              if (product.length > 0) {
                await passorder(appstore.token);
                setrefx(!refx);
              }
            }}
            labelStyle={{
              fontSize: 19,

              fontFamily: "Poppins_300Light",
            }}
            textColor="#FFE4C5"
            buttonColor="#007451"
            style={{
              width: "80%",
              marginTop: 20,
            }}
          >
            Order
          </Button>
        </View>
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
  listContainer: {
    alignItems: "center", // Centers the items horizontally
  },
  item: {
    width: "95%", // Set width to 80% of the parent
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#A3B18A",
    borderRadius: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
