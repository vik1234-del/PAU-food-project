import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shoppingbag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft-Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery-items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast-foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee and tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 12.5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/*code below helps to iterate within the loop for each item in items.*/}
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
