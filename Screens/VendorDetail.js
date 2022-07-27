import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/VendorDetails/About";
import MenuItems from "../components/VendorDetails/MenuItem";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ViewCart from "../components/VendorDetails/ViewCart";

// navigation.navigate("VendorDetail", {
//   name: name,
//   image_url: image_url,
//   desc: desc,
//   categories: categories,
//   price: price,
//   rating: rating,
// });

export default function VendorDetail({ route, navigation }) {
  const { name, desc, image_url, aboutpage, menuItems, rating } = route.params;
  return (
    <SafeAreaView
      style={{ backgroundColor: "#eee", flex: 1, marginBottom: 70 }}
    >
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <About
            title={name}
            description={desc}
            image={image_url}
            aboutpage={aboutpage}
            rating={rating}
          />
          <Divider
            width={1.8}
            style={{ marginVertical: 20, marginBottom: -5 }}
          />
          {/* <BouncyCheckbox /> */}
          <MenuItems menuItems={menuItems} restaurantName={name} />
        </ScrollView>
        <ViewCart navigation={navigation} restaurantName={name} />
      </View>
    </SafeAreaView>
  );
}
