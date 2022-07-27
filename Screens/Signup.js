import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

function Signup({ navigation }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/roboto-700.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pauFoods}>PAU FOODS</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.signInWithGoogle}>SIGN IN WITH GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,132,8,1)",
  },
  pauFoods: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 35,
    marginTop: 336,
    marginLeft: 105,
  },
  button: {
    width: 244,
    height: 42,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 11,
    marginTop: 274,
    marginLeft: 66,
  },
  signInWithGoogle: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 13,
    marginLeft: 50,
  },
});

export default Signup;
