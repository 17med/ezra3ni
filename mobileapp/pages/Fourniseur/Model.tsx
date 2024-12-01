import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useStore from "../../service/store";
import { createprod } from "../../service/ProductManager";
export default function Modal({ navigation }: { navigation: any }) {
  const [data, setdata] = useState({ name: "", price: 0, image: "" });
  const store = useStore();
  useEffect(() => {
    //@ts-ignore
    console.log(store.token);
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "#e8ceb0",
          width: "90%",
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          Ajouter Produit
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 200,
              height: 50,
              marginTop: 30,

              backgroundColor: "#FFE4C5",
            }}
            onChangeText={(text) => setdata({ ...data, name: text })}
            placeholder={"Name"}
            mode="outlined"
            multiline={false}
            outlineStyle={{
              borderRadius: 20,
              borderColor: "#007451",
            }}
            textColor="#007451"
            theme={{ colors: { primary: "#007451" } }}
          />
          <TextInput
            style={{
              width: 200,
              height: 50,
              marginTop: 10,
              backgroundColor: "#FFE4C5",
            }}
            onChangeText={(text) => setdata({ ...data, price: Number(text) })}
            placeholder={"Prix "}
            mode="outlined"
            multiline={false}
            keyboardType="numeric"
            outlineStyle={{
              borderRadius: 20,

              borderColor: "#007451",
            }}
            textColor="#007451"
            theme={{ colors: { primary: "#007451" } }}
          />
          <TextInput
            style={{
              width: 200,
              height: 50,
              marginTop: 10,
              backgroundColor: "#FFE4C5",
            }}
            onChangeText={(text) => setdata({ ...data, image: text })}
            placeholder={"Image url "}
            mode="outlined"
            multiline={false}
            outlineStyle={{
              borderRadius: 20,

              borderColor: "#007451",
            }}
            textColor="#007451"
            theme={{ colors: { primary: "#007451" } }}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Button
            style={{ marginTop: 30 }}
            mode="contained"
            labelStyle={{
              fontSize: 13,
              fontFamily: "Poppins_300Light",
            }}
            contentStyle={{
              width: 110,
              height: 50,
            }}
            textColor="#FFE4C5"
            buttonColor="red"
            onPress={() => navigation.goBack()}
          >
            Cancel
          </Button>
          <Button
            style={{ marginTop: 30 }}
            mode="contained"
            labelStyle={{
              fontSize: 13,
              fontFamily: "Poppins_300Light",
            }}
            contentStyle={{
              width: 110,
              height: 50,
            }}
            textColor="#FFE4C5"
            buttonColor="#007451"
            onPress={async () => {
              //@ts-ignore
              await createprod(data.name, data.price, data.image, store.token);
              navigation.navigate("Homenormal", {
                screen: "Homenormalx",
                Path: "Homenormalx",
              });
            }}
          >
            Add
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.98,

    backgroundColor: "'rgba(0, 0, 0, 0.01)'",
    alignItems: "center",
    justifyContent: "center",
  },
});
