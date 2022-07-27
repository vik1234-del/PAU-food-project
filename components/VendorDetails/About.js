import { View, Text, Image } from "react-native";
import React from "react";
// import Categories from "../Home/Categories";

//   "Good small chops • ₦₦ • Fast-foods • Bakery-Items • 🎫 •  4🌟 • ";

export default function About({ image, title, aboutpage, rating }) {
  return (
    <View style={{ margin: "auto" }}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription aboutpage={aboutpage} />
      <RestaurantRating rating={rating} />
      {/* <Categories Categories={Categories} /> */}
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontWeight: "600",
      fontSize: 29,
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
      marginBottom: -15,
    }}
  >
    {props.aboutpage}
  </Text>
);

const RestaurantRating = (props) => (
  <Text
    style={{
      textAlign: "right",
      marginRight: "5%",
      fontWeight: "bold",
      fontSize: 15,
    }}
  >
    {props.rating}
  </Text>
);
