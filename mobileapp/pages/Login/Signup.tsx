import React from "react";
import { View, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { create } from "../../service/sendmessage";
import {
  Poppins_300Light,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import useUserStore from "../../service/store";
import * as Animatable from "react-native-animatable";

export default function Select({ navigation }: any) {
  const store = useUserStore();
  const [data, setdata] = useState({ username: "", password: "", email: "" });
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFE4C5",
        }}
      ></View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFE4C5",
      }}
    >
      <Animatable.View animation="fadeIn" duration={1000}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 100 }}
          src={
            "https://s3-alpha-sig.figma.com/img/110e/889f/771e35e75d32cab5a2eda44234dbf4a4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDVtxTu2CC91Tn9onYOK~nDWvY7LSweL5OqQAylXNRnJhEyPkVA7NT21ec316uv~Kjk8b42ARo8QZwLbX-O~11kdRsNwfierwaJgU1oAnWUa~Yob-9vGDz2f7mkTzE0e2xF4WzBRYhiOxZ4bL3AxpWc7k7ukQDEt436X7-NWrWVCYGEhQVJLL8iOWoEgwIYbRYyTQYbriOJ~UEZqKRyJ6CS~WvQrifdO-MdjueeuMjmeABZLX-zGpcNgGC4gWZHzl3h9-VrsR-h2HOuwVZcYVhmU0xpjSyBTdDr-mKk2XbKQrkdv0FPRgg20I1UUmsgh5u39Bh56ecomeelYB8l9Sg__"
          }
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" duration={1500}>
        <TextInput
          style={{
            width: 200,
            height: 50,
            marginTop: 30,
            backgroundColor: "#FFE4C5",
          }}
          onChangeText={(text) => setdata({ ...data, email: text })}
          label={"Email"}
          mode="outlined"
          multiline={false}
          outlineStyle={{
            borderColor: "#007451",
          }}
          textColor="#007451"
          theme={{ colors: { primary: "#007451" } }}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" duration={1500}>
        <TextInput
          style={{
            width: 200,
            height: 50,
            marginTop: 10,
            backgroundColor: "#FFE4C5",
            marginBottom: 10,
          }}
          onChangeText={(text) => setdata({ ...data, username: text })}
          label={"Username"}
          mode="outlined"
          outlineStyle={{
            borderColor: "#007451",
          }}
          multiline={false}
          textColor="#007451"
          theme={{ colors: { primary: "#007451" } }}
        />
      </Animatable.View>
      <Animatable.View animation="fadeIn" duration={1500}>
        <TextInput
          style={{
            width: 200,
            height: 50,
            marginTop: 10,
            backgroundColor: "#FFE4C5",
            marginBottom: 10,
          }}
          onChangeText={(text) => setdata({ ...data, password: text })}
          label={"Passwrord"}
          mode="outlined"
          outlineStyle={{
            borderColor: "#007451",
          }}
          secureTextEntry={true}
          multiline={false}
          textColor="#007451"
          theme={{ colors: { primary: "#007451" } }}
        />
      </Animatable.View>

      <Animatable.View animation="fadeIn" duration={1800}>
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
          buttonColor="#007451"
          onPress={async () => {
            console.log(
              await create(
                data.username,
                data.password,
                data.email,

                store,
                () => navigation.replace("Homenormal")
              )
            );
          }}
        >
          Sign In
        </Button>
      </Animatable.View>
    </View>
  );
}
