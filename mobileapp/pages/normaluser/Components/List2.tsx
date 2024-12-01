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
import { addproduct } from "../../../service/CarManager";
export default function App({ plants, token }: any) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {plants.map((plant: any) => (
          <View key={plant.id} style={styles.card}>
            {/* Favorite Icon */}
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => addproduct(token, plant.id)}
            >
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
