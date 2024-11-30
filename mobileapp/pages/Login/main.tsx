import React, { useEffect } from "react";
import { View, Image, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import useUserStore from "../../service/store";

export default function Main({ navigation }: any) {
  const appstore = useUserStore();

  useEffect(() => {
    console.log(appstore);

    //@ts-ignore
    appstore
      .initializeUser(
        () => navigation.replace("select"),
        () => navigation.replace("Homenormal")
      )
      .then(() => console.log("User initialized"))
      .catch((e: any) => console.log(e));
  }, []);

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
      <Animatable.View animation="fadeIn" duration={2000}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          src={
            "https://s3-alpha-sig.figma.com/img/110e/889f/771e35e75d32cab5a2eda44234dbf4a4?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDVtxTu2CC91Tn9onYOK~nDWvY7LSweL5OqQAylXNRnJhEyPkVA7NT21ec316uv~Kjk8b42ARo8QZwLbX-O~11kdRsNwfierwaJgU1oAnWUa~Yob-9vGDz2f7mkTzE0e2xF4WzBRYhiOxZ4bL3AxpWc7k7ukQDEt436X7-NWrWVCYGEhQVJLL8iOWoEgwIYbRYyTQYbriOJ~UEZqKRyJ6CS~WvQrifdO-MdjueeuMjmeABZLX-zGpcNgGC4gWZHzl3h9-VrsR-h2HOuwVZcYVhmU0xpjSyBTdDr-mKk2XbKQrkdv0FPRgg20I1UUmsgh5u39Bh56ecomeelYB8l9Sg__"
          }
        />
      </Animatable.View>
      <Text style={{ fontSize: 20, marginTop: 20 }}>Azra3ni</Text>
    </View>
  );
}
