import { View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
// import HeaderTabs from "../components/Home/HeaderMessage";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import VendorItems from "../components/Home/VendorItems";
import NewTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements";

export default function Home({ navigation }) {
  // const [activeTab, setActiveTab] = useState("Delivery");
  const [clicked, setCLicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        {/* <HeaderTabs /> */}
        {/* {!clicked && <Text style={styles.title}>Programming Languages</Text>} */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          clicked={clicked}
          setCLicked={setCLicked}
        />
      </View>
      <Categories />

      <ScrollView
        showsVerticalScrollIndicator={false}
        styles={{ flex: 1, justifyContent: "center" }}
      >
        <VendorItems
          navigation={navigation}
          searchQuery={searchQuery}
          // data={VendorItems.Vendors}
          setCLicked={setCLicked}
        />
      </ScrollView>
      <Divider width={0.5} />
      <NewTabs />
    </SafeAreaView>
  );
}
