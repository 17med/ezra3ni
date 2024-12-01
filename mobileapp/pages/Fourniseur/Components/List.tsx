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

const AccordionList = ({ list }: { list: any[] }) => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handlePress = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: { id: number; items: any[]; user: any; createdAt: string };
    index: number;
  }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => handlePress(index)}
        style={styles.accordionHeader}
      >
        <Text style={styles.accordionTitle}>Order ID: {item.id}</Text>
        <Text style={styles.accordionSubtitle}>User: {item.user.username}</Text>
      </TouchableOpacity>
      {expandedIndex === index && (
        <View style={styles.accordionContent}>
          <Text>Created At: {new Date(item.createdAt).toLocaleString()}</Text>
          {item.items.map((subItem: any) => (
            <View key={subItem.id} style={styles.subItem}>
              <Text>Command ID: {subItem.commandId}</Text>
              <Text>Product ID: {subItem.productId}</Text>
              <Text>Quantity: {subItem.quantity}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
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
  accordionSubtitle: {
    fontSize: 16,
    fontFamily: "Poppins_300Light",
  },
  accordionContent: {
    padding: 15,
    fontFamily: "Poppins_300Light",
    backgroundColor: "#FFF5E1",
  },
  subItem: {
    marginVertical: 5,
  },
});

export default AccordionList;
