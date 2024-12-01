import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
export default function Modal() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "#FFE4C5",
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
          Update Produit
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
            onChangeText={() => {}}
            placeholder={"Prix"}
            mode="outlined"
            multiline={false}
            outlineStyle={{
              borderRadius: 30,
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
            onChangeText={() => {}}
            placeholder={"Prix"}
            mode="outlined"
            multiline={false}
            outlineStyle={{
              borderRadius: 20,
              marginRight: 10,
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
          }}
        >
          <Button
            style={{ marginTop: 30 }}
            mode="contained"
            labelStyle={{
              fontSize: 19,
              fontFamily: "Poppins_300Light",
            }}
            contentStyle={{
              width: 200,
              height: 50,
            }}
            textColor="#FFE4C5"
            buttonColor="red"
            onPress={
              //@ts-ignore
              () => {}
            }
          >
            Logout
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.98,

    backgroundColor: "'rgba(0, 0, 0, 0.5)'",
    alignItems: "center",
    justifyContent: "center",
  },
});
