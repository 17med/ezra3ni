import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const plants = [
  {
    id: 2,
    name: "FICUS",
    price: "45$",
    image:
      "https://s3-alpha-sig.figma.com/img/11ab/582c/4b7386eac164aa7e53d0f9ca4895340b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OrRw9~z773-izegoSsa708WqO8wbHpGyvmpeOZpDbknr~TkAxBeSM-22vG8Z0iNK5inrppD9c1CD0aCFzDDqJHB-J8ELPaDI8tIhSFDlsBNO9QXBYaePEtwVn3T4hm6zJ4MNg-KoEMM~j5NwKAml8Z5CpM5scvQdDR5UdnZ1~UNm-IeCEa-GwI3qqVzfgy~wUj~3Ax6DlFdDNEKwgtry2B1AvY13Sk1Px3RtPpyUB5U01pLZvOSLo9zc1Y8AXU5f0g-m7PAA9poiaRInCS8stDucatAl1KvmaTujzQ9MWdfsh~5FaVFll3FMBOaXIjfHt~8dmgfuz3IvA4RvYsXc3Q__",
  },
  {
    id: 1,
    name: "MUSA",
    price: "39$",
    image:
      "https://s3-alpha-sig.figma.com/img/48a5/8d5d/80680a48c1881cab5aecb6cb23fc3d4d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5oVsrzgtYm7ys8nkbDluLO5pyyIto4bNNZkzrejpBuD~tndzTV6yevCXtdZTyLfahW9xXsDWkUzyFJXXBxSGW2kgnq7y-gRzBE0JmRGROIhxTQ7YdU67ihbgHv1c8BDOp3SoTo9j~a2UrqqqZwgrldApKhrkT5pMIdRog~IDQNLlfiAdTQtU-Hbv-V~0WGvB-d0fyjd591P-yxYD8IwMl4jA95ey1yUc7MAOllqrxdpGLv9gkYKvGYcwWX-WTIw9u6hzxDAum-CBkiHXSLenFNvHQKl2rUCNsXu2afitTM27tdFm7CIhDYR~BaG7l-dnKGHrPTNEDJHg8grYL9gtQ__",
  },
  {
    id: 3,
    name: "MONSTERA",
    price: "50$",
    image:
      "https://s3-alpha-sig.figma.com/img/48a5/8d5d/80680a48c1881cab5aecb6cb23fc3d4d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5oVsrzgtYm7ys8nkbDluLO5pyyIto4bNNZkzrejpBuD~tndzTV6yevCXtdZTyLfahW9xXsDWkUzyFJXXBxSGW2kgnq7y-gRzBE0JmRGROIhxTQ7YdU67ihbgHv1c8BDOp3SoTo9j~a2UrqqqZwgrldApKhrkT5pMIdRog~IDQNLlfiAdTQtU-Hbv-V~0WGvB-d0fyjd591P-yxYD8IwMl4jA95ey1yUc7MAOllqrxdpGLv9gkYKvGYcwWX-WTIw9u6hzxDAum-CBkiHXSLenFNvHQKl2rUCNsXu2afitTM27tdFm7CIhDYR~BaG7l-dnKGHrPTNEDJHg8grYL9gtQ__",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {plants.map((plant) => (
          <View key={plant.id} style={styles.card}>
            {/* Favorite Icon */}
            <TouchableOpacity style={styles.heartIcon}>
              <FontAwesome name="heart" size={20} color="white" />
            </TouchableOpacity>

            {/* Plant Image */}
            <Image source={{ uri: plant.image }} style={styles.image} />

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ display: "flex", width: "80%" }}>
                <Text style={styles.title}>{plant.name}</Text>
                <Text style={styles.price}>{"Add to Cart"}</Text>
              </View>
              <Text style={styles.title}>{plant.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 16,
    color: "#333",
  },
  scrollView: {
    paddingLeft: 16,
  },
  card: {
    backgroundColor: "",
    borderRadius: 12,

    width: "40%",
    alignItems: "center",
    marginRight: 16,
    position: "relative",
  },
  heartIcon: {
    backgroundColor: "#FF6F61", // Heart color
    borderRadius: 20,
    padding: 8,
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
  },
  image: {
    width: 250,
    height: 400,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#444444", // Dark gray
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
