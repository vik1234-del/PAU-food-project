import { View, Text } from "react-native";
import React from "react";

export default function OrderItem({ item }) {
  const { title, price } = item;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomColor: "#999",
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
      <Text style={{ fontSize: 16, opacity: 0.7 }}>{price}</Text>
    </View>
  );
}
