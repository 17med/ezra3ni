import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
const AccordionList = () => {
  // Load the fonts
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  // Display loading message while fonts are being loaded
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  // State for controlling which item is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const data = [
    { id: "1", title: "Item 1", content: "Details about Item 1" },
    { id: "2", title: "Item 2", content: "Details about Item 2" },
    { id: "3", title: "Item 3", content: "Details about Item 3" },
  ];

  const renderItem = ({
    item,
    index,
  }: {
    item: { title: string; content: string };
    index: number;
  }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => handlePress(index)}
        style={styles.accordionHeader}
      >
        <Text style={styles.accordionTitle}>{item.title}</Text>
      </TouchableOpacity>
      {expandedIndex === index && (
        <View style={styles.accordionContent}>
          <Text>{item.content}</Text>
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FFDFBA",
  },
  accordionHeader: {
    padding: 15,
    backgroundColor: "#FFDFBA",
  },
  accordionTitle: {
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
  accordionContent: {
    padding: 15,
    fontFamily: "Poppins_300Light",
    backgroundColor: "#FFDFBA",
  },
});

export default AccordionList;
