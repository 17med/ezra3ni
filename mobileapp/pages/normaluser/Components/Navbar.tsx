import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
function Btn({
  svg,
  isActive,
  onClick,
  desictovate,
}: {
  svg: any;
  isActive: boolean;
  onClick: any;
  desictovate?: boolean;
}) {
  return (
    <IconButton
      icon={svg}
      size={30}
      onPress={onClick}
      iconColor={"black"}
      disabled={desictovate}
      style={isActive ? style.btnActive : style.btninActive}
    ></IconButton>
  );
}
export default function Navbar() {
  const navigation = useNavigation<any>();
  const [pagex, setpagex] = useState("0");
  const route = useRoute<{
    key: string;
    name: string;
    params: { Path?: string };
  }>();
  useEffect(() => {
    if (route.params == undefined) {
      setpagex("Homenormalx");
    } else {
      if (route.params.Path != undefined) {
        setpagex(route.params.Path);
      } else {
        setpagex("Homenormalx");
      }
    }
  }, [route]);
  return (
    <View
      style={{
        flex: 0.15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#FFE4C5",
      }}
    >
      <Btn
        isActive={pagex == "Homenormalx"}
        onClick={() =>
          navigation.navigate("Homenormal", {
            screen: "Homenormalx",
            Path: "Homenormalx",
          })
        }
        svg={() => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M11.25 18C11.25 18.1989 11.329 18.3897 11.4697 18.5303C11.6103 18.671 11.8011 18.75 12 18.75C12.1989 18.75 12.3897 18.671 12.5303 18.5303C12.671 18.3897 12.75 18.1989 12.75 18V15C12.75 14.8011 12.671 14.6103 12.5303 14.4697C12.3897 14.329 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.329 11.4697 14.4697C11.329 14.6103 11.25 14.8011 11.25 15V18Z"
              fill="black"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 1.25C11.292 1.25 10.649 1.453 9.95 1.792C9.276 2.12 8.496 2.604 7.523 3.208L5.456 4.491C4.536 5.063 3.797 5.521 3.229 5.956C2.64 6.406 2.188 6.866 1.861 7.463C1.535 8.058 1.389 8.692 1.318 9.441C1.25 10.166 1.25 11.054 1.25 12.167V13.78C1.25 15.684 1.25 17.187 1.403 18.362C1.559 19.567 1.889 20.54 2.633 21.309C3.38 22.082 4.33 22.428 5.508 22.591C6.648 22.75 8.106 22.75 9.942 22.75H14.058C15.894 22.75 17.352 22.75 18.492 22.591C19.669 22.428 20.62 22.082 21.368 21.309C22.111 20.54 22.441 19.567 22.598 18.362C22.75 17.187 22.75 15.684 22.75 13.78V12.167C22.75 11.054 22.75 10.167 22.682 9.441C22.612 8.691 22.465 8.058 22.139 7.463C21.812 6.866 21.359 6.407 20.771 5.956C20.203 5.52 19.465 5.063 18.544 4.491L16.477 3.208C15.504 2.604 14.724 2.12 14.049 1.792C13.352 1.452 12.709 1.25 12 1.25ZM8.28 4.504C9.295 3.874 10.01 3.432 10.607 3.141C11.188 2.858 11.6 2.75 12 2.75C12.4 2.75 12.812 2.858 13.393 3.141C13.991 3.431 14.705 3.874 15.72 4.504L17.72 5.745C18.681 6.342 19.356 6.761 19.86 7.147C20.349 7.522 20.63 7.831 20.823 8.183C21.016 8.536 21.129 8.949 21.188 9.581C21.249 10.229 21.25 11.046 21.25 12.204V13.725C21.25 15.695 21.248 17.101 21.11 18.168C20.974 19.216 20.717 19.824 20.29 20.267C19.865 20.706 19.287 20.967 18.286 21.106C17.26 21.248 15.907 21.25 14 21.25H10C8.092 21.25 6.74 21.248 5.714 21.106C4.713 20.966 4.135 20.706 3.711 20.266C3.283 19.824 3.026 19.216 2.891 18.168C2.751 17.101 2.75 15.696 2.75 13.725V12.204C2.75 11.046 2.75 10.229 2.812 9.581C2.871 8.949 2.984 8.536 3.177 8.183C3.37 7.831 3.651 7.522 4.141 7.147C4.644 6.761 5.319 6.342 6.28 5.745L8.28 4.504Z"
              fill="black"
            />
          </Svg>
        )}
      />
      <Btn
        isActive={pagex == "Collactionnormalx"}
        onClick={() =>
          navigation.navigate("Homenormal", {
            screen: "Collactionnormalx",
            Path: "Collactionnormalx",
          })
        }
        svg={() => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.494 3.80103C20.589 5.02203 22.063 7.50103 21.998 10.393C21.917 14.003 19.108 17.187 14.319 20.031C13.609 20.453 12.861 21 12 21C11.155 21 10.375 20.443 9.68001 20.03C4.89301 17.187 2.08301 14.002 2.00201 10.393C1.93701 7.50103 3.41101 5.02303 5.50601 3.80103C7.46601 2.66003 9.92801 2.65303 12 4.33803C14.072 2.65303 16.534 2.65903 18.494 3.80103ZM17.487 5.53003C16.093 4.71803 14.351 4.74703 12.843 6.27303C12.7324 6.384 12.6011 6.47204 12.4564 6.53212C12.3117 6.5922 12.1566 6.62312 12 6.62312C11.8434 6.62312 11.6883 6.5922 11.5436 6.53212C11.3989 6.47204 11.2676 6.384 11.157 6.27303C9.64901 4.74703 7.90701 4.71803 6.51301 5.53003C5.06901 6.37203 3.95301 8.15803 4.00201 10.35C4.05801 12.861 6.04201 15.544 10.702 18.312C11.11 18.555 11.536 18.866 12 18.995C12.464 18.866 12.89 18.555 13.298 18.312C17.958 15.544 19.942 12.862 19.998 10.349C20.048 8.15903 18.931 6.37203 17.487 5.53003Z"
              fill="black"
            />
          </Svg>
        )}
      />
      <Btn
        isActive={false}
        desictovate={true}
        onClick={() => console.log("click")}
        svg={() => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M3.74201 20.555C4.94201 22 7.17401 22 11.64 22H12.36C16.826 22 19.059 22 20.259 20.555M3.74201 20.555C2.54201 19.109 2.95401 16.915 3.77701 12.525C4.36201 9.405 4.65401 7.844 5.76501 6.922M20.259 20.555C21.459 19.109 21.047 16.915 20.224 12.525C19.639 9.405 19.346 7.844 18.235 6.922M18.235 6.922C17.125 6 15.536 6 12.361 6H11.639C8.46401 6 6.87601 6 5.76501 6.922"
              stroke="black"
              stroke-width="1.5"
            />
            <Path
              d="M9 6V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V6"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </Svg>
        )}
      />
      <Btn
        isActive={false}
        onClick={() =>
          navigation.navigate("Homenormal", {
            screen: "Profilenormalx",
            Path: "Profilenormalx",
          })
        }
        svg={() => (
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M19 20.75C19.2652 20.75 19.5196 20.6446 19.7071 20.4571C19.8946 20.2696 20 20.0152 20 19.75V18.504C20.004 15.698 16.026 13.5 12 13.5C7.974 13.5 4 15.698 4 18.504V19.75C4 20.0152 4.10536 20.2696 4.29289 20.4571C4.48043 20.6446 4.73478 20.75 5 20.75H19ZM15.604 6.854C15.604 7.32728 15.5108 7.79593 15.3297 8.23319C15.1485 8.67045 14.8831 9.06775 14.5484 9.40241C14.2138 9.73707 13.8164 10.0025 13.3792 10.1837C12.9419 10.3648 12.4733 10.458 12 10.458C11.5267 10.458 11.0581 10.3648 10.6208 10.1837C10.1836 10.0025 9.78625 9.73707 9.45159 9.40241C9.11692 9.06775 8.85146 8.67045 8.67034 8.23319C8.48922 7.79593 8.396 7.32728 8.396 6.854C8.396 5.89816 8.77571 4.98147 9.45159 4.30559C10.1275 3.62971 11.0442 3.25 12 3.25C12.9558 3.25 13.8725 3.62971 14.5484 4.30559C15.2243 4.98147 15.604 5.89816 15.604 6.854Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        )}
      />
    </View>
  );
}
const style = StyleSheet.create({
  btnActive: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.7)",
    backgroundColor: "#007451",
    borderRadius: 10,
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  btninActive: {
    borderRadius: 10,
    width: 60,
    height: 60,
    marginLeft: 10,
  },
});
