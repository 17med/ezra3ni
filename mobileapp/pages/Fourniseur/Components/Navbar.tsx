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
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              d="M6.25 10C6.25 10.9946 6.64509 11.9484 7.34835 12.6517C8.05161 13.3549 9.00544 13.75 10 13.75C10.9946 13.75 11.9484 13.3549 12.6517 12.6517C13.3549 11.9484 13.75 10.9946 13.75 10"
              stroke="black"
              stroke-linecap="round"
            />
            <Path
              d="M0.625 5.88875C0.625 5.1375 0.625 4.76125 0.7325 4.4075C0.84 4.05375 1.0475 3.74 1.465 3.115L1.64 2.8525C2.3675 1.76125 2.73 1.21625 3.28375 0.92125C3.83625 0.625 4.49125 0.625 5.80125 0.625H14.1988C15.5088 0.625 16.1637 0.625 16.7162 0.92125C17.2687 1.21625 17.6325 1.76125 18.3588 2.85125L18.535 3.115C18.9525 3.74 19.16 4.0525 19.2675 4.4075C19.375 4.76125 19.375 5.1375 19.375 5.88875V14.375C19.375 16.7325 19.375 17.91 18.6425 18.6425C17.91 19.375 16.7325 19.375 14.375 19.375H5.625C3.2675 19.375 2.09 19.375 1.3575 18.6425C0.625 17.91 0.625 16.7325 0.625 14.375V5.88875Z"
              stroke="black"
            />
            <Path
              d="M0.625 6.875H19.375"
              stroke="black"
              stroke-linecap="round"
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
              d="M15.1155 0.568536C14.0756 0.168561 12.9243 0.168561 11.8845 0.568536L4.44296 3.43054C4.01835 3.59368 3.65317 3.8817 3.39556 4.25659C3.13795 4.63149 3.00002 5.07566 2.99996 5.53054V9.38554C3.47796 9.21554 3.97796 9.10054 4.49996 9.04053V5.95954L12.75 9.49504V20.0685L13.413 20.7315C13.9945 20.7425 14.5727 20.6406 15.1155 20.4315L22.5585 17.5695C22.9828 17.4061 23.3477 17.118 23.605 16.7432C23.8623 16.3683 24 15.9242 24 15.4695V5.53054C24 5.07584 23.8623 4.63179 23.605 4.25692C23.3477 3.88204 22.9828 3.59392 22.5585 3.43054L15.1155 0.568536ZM12.423 1.96804C13.1162 1.70139 13.8837 1.70139 14.577 1.96804L21.654 4.69054L18.7335 5.94154L10.347 2.76754L12.423 1.96804ZM14.25 9.49504L22.5 5.95954V15.4695C22.5001 15.6211 22.4543 15.7692 22.3686 15.8943C22.283 16.0193 22.1614 16.1155 22.02 16.17L14.577 19.032C14.47 19.074 14.361 19.109 14.25 19.137V9.49504ZM13.5 8.18404L5.34596 4.68904L8.24546 3.57454L16.746 6.79354L13.5 8.18404ZM5.24996 21C6.42896 21 7.51796 20.61 8.39396 19.9545L12.219 23.7795C12.2886 23.8493 12.3713 23.9046 12.4623 23.9424C12.5533 23.9802 12.6509 23.9996 12.7494 23.9997C12.848 23.9998 12.9456 23.9804 13.0366 23.9428C13.1277 23.9051 13.2105 23.8499 13.2802 23.7803C13.3499 23.7107 13.4053 23.628 13.4431 23.5369C13.4808 23.4459 13.5003 23.3484 13.5004 23.2498C13.5004 23.1513 13.4811 23.0537 13.4435 22.9626C13.4058 22.8715 13.3506 22.7888 13.281 22.719L9.45596 18.894C10.164 17.9472 10.5317 16.7891 10.4995 15.6073C10.4674 14.4254 10.0373 13.289 9.2788 12.3821C8.52035 11.4751 7.47798 10.8508 6.32047 10.61C5.16296 10.3693 3.95808 10.5263 2.90092 11.0556C1.84376 11.585 0.996213 12.4556 0.495517 13.5267C-0.00517939 14.5977 -0.129712 15.8063 0.142083 16.957C0.413878 18.1076 1.06609 19.1328 1.99311 19.8665C2.92013 20.6003 4.06768 20.9997 5.24996 21ZM5.24996 19.5C4.2554 19.5 3.30157 19.1049 2.59831 18.4017C1.89505 17.6984 1.49996 16.7446 1.49996 15.75C1.49996 14.7555 1.89505 13.8016 2.59831 13.0984C3.30157 12.3951 4.2554 12 5.24996 12C6.24452 12 7.19835 12.3951 7.90161 13.0984C8.60487 13.8016 8.99996 14.7555 8.99996 15.75C8.99996 16.7446 8.60487 17.6984 7.90161 18.4017C7.19835 19.1049 6.24452 19.5 5.24996 19.5Z"
              fill="black"
            />
          </Svg>
        )}
      />

      <Btn
        isActive={pagex == "Profilenormalx"}
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
