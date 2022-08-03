import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import VendorDetail from "./Screens/VendorDetail";
import Home from "./Screens/Home";
import { Provider as ReduxProvider } from "react-redux";
// import store from "./redux/store";
import configureStore from "./redux/store";
import Signup from "./Screens/Signup";

// import { Types } from "./components/Home/Types";

//defining navigation type
// export const StackParams = {
//     Home: any,
//     VendorDetail: {
//         item: Types
//     },

// };
// const EmployeesStack = createStackNavigator<StackParams>();

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="VendorDetail" component={VendorDetail} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
