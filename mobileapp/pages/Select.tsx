import React from "react";
import useStore from "../service/store";
import Homenormal from "./normaluser/app";
import Homeadmin from "./Admin/app";
import { View, Text } from "react-native";
function Selector({ type }: any) {
  switch (type) {
    case "normal":
      return <Homenormal />;
    case "admin":
      return <Homeadmin />;
    default:
      return (
        <View style={{ flex: 1, backgroundColor: "#FFE4C5" }}>
          <Text>3assva</Text>
        </View>
      );
  }
}
export default function Selectfromtype() {
  const { accountType }: any = useStore();

  return (
    <>
      <Selector type={accountType} />
    </>
  );
}
