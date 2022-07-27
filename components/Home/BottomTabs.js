import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function NewTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 2,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="shopping-cart" text="Vendors" />
      <Icon style={{ color: "red" }} icon="heart" text="Favourites" />
      <Icon icon="user-alt" text="Profile" />
    </View>
  );
}
const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
