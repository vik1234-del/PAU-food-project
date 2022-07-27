import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MenuItems({ menuItems, restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodinCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <View>
      <ScrollView styles={styles.list} showsVerticalScrollIndicator={false}>
        {menuItems.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemsStyle}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgrey" }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodinCart(food, cartItems)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View
    style={{ width: 240, justifyContent: "space-evenly", marginRight: "-3%" }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{ marginRight: "20%" }}>{props.food.Description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 80, height: 80, borderRadius: 10, marginLeft: -30 }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemsStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  list: {
    height: "100%",
  },
  titleStyle: {
    fontWeight: "500",
    fontSize: 19,
  },
});
