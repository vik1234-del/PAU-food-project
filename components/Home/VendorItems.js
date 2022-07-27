import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const Vendors = [
  {
    id: 1,
    name: "The Bites Business",
    image_url: "https://guardian.ng/wp-content/uploads/2016/04/Small-Chops.jpg",
    desc: "Good small chops",
    categories: ["Fast-foods", "Bakery-items"],
    price: "NGN",
    rating: "🌟4.5",
    aboutpage: "Delivery ₦250 | 🎫 only",
    menuItems: [
      {
        title: "Big pack chops",
        Description: "The bigger the better",
        price: "₦1000",
        image: "https://miro.medium.com/max/1079/1*ZSbWn7G0xQhQagcEzh424Q.jpeg",
      },

      {
        title: "Medium pack chops",
        Description: "Medium size but still the best",
        price: "₦800",
        image: "https://pbs.twimg.com/media/EeFTwXmWkAEhR7p.jpg",
      },

      {
        title: "Small pack chops",
        Description: "Small size but you get value for your money",
        price: "₦500",
        image: "https://static-uc.olist.ng/upload/20191127/e1gcq2f0xdu.jpg",
      },
      {
        title: "Small pack chops",
        Description: "Small size but you get value for your money",
        price: "₦500",
        image: "https://static-uc.olist.ng/upload/20191127/e1gcq2f0xdu.jpg",
      },
      {
        title: "Small pack chops",
        Description: "Small size but you get value for your money",
        price: "₦500",
        image: "https://static-uc.olist.ng/upload/20191127/e1gcq2f0xdu.jpg",
      },
      {
        title: "Small pack chops",
        Description: "Small size but you get value for your money",
        price: "₦500",
        image: "https://static-uc.olist.ng/upload/20191127/e1gcq2f0xdu.jpg",
      },
      {
        title: "Small pack chops",
        Description: "Small size but you get value for your money",
        price: "₦500",
        image: "https://static-uc.olist.ng/upload/20191127/e1gcq2f0xdu.jpg",
      },
      {
        title: "Small pack chops",
        Description: "Small size but you get value for your money",
        price: "₦500",
        image: "https://static-uc.olist.ng/upload/20191127/e1gcq2f0xdu.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Cooperative Cafeteria",
    image_url: "https://paucoophostel.com/img/portfolios/card/4.jpg",
    desc: "Best fast food",
    categories: ["Fast-foods", "Soft-Drinks"],
    price: "NGN",
    rating: "🌟4.4",
    aboutpage: "Delivery ₦650 | 🚫 Transfer",
    menuItems: [
      {
        title: "Spaghetti",
        Description: "Tasty spaghetti cooked with a variety of ingredients.",
        price: "₦200",
        image:
          "https://www.thecitycook.com/recipes/2007-02-01-pantry-dinner-spaghetti-with-tomato-paste-and-garlic/_res/id=Pictures/index=0",
      },

      {
        title: "Jollof-Rice",
        Description: "Tasty Naija jollof with bottom pot taste.",
        price: "₦200",
        image:
          "https://www.preciouscore.com/wp-content/uploads/2018/08/Nigerian-Jollof-Rice-Recipe.jpg",
      },

      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
      {
        title: "Fried-Rice",
        Description: "Tasty fried rice garnished with fresh veggies.",
        price: "₦200",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnM4_71KzK9O08Cl2lkWm3_6zYCS2bBK3-g&usqp=CAU",
      },
    ],
  },

  {
    id: 3,
    name: "Carolyn Cakes",
    image_url:
      "https://salescabal.s3.eu-west-3.amazonaws.com/stores/27817/carlyoncakes.png",
    desc: "Quality cakes always",
    categories: ["Bakery-items", "Desserts"],
    price: "NGN",
    rating: "🌟4.9",
    aboutpage: "Delivery ₦450 | Transfer ✅",
    menuItems: [
      {
        title: "Cupcakes",
        Description: "A box of delicious cupcakes with a variety of flavors.",
        price: "₦1000",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus1xjRoA4n2E8pPJsmgHyHsoDDOIhiAZ_4A&usqp=CAU",
      },

      {
        title: "Regular sized cakes",
        Description:
          "Let us make your speical day even more special with this tastefully caked, small sized and affordable cake.",
        price: "₦3500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp1ETXKFeNEnRccq3Owg0FwhZencecSzGiw&usqp=CAU",
      },

      {
        title: "Larger sized cakes",
        Description:
          "Enkoy our lavishly baked premium quality cakes with your loved ones today.",
        price: "₦500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZHLo9EuR4cVQCJh7w_VujBFANJG4qvzKQ&usqp=CAU",
      },
      {
        title: "Larger sized cakes",
        Description:
          "Enkoy our lavishly baked premium quality cakes with your loved ones today.",
        price: "₦500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZHLo9EuR4cVQCJh7w_VujBFANJG4qvzKQ&usqp=CAU",
      },
      {
        title: "Larger sized cakes",
        Description:
          "Enkoy our lavishly baked premium quality cakes with your loved ones today.",
        price: "₦500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZHLo9EuR4cVQCJh7w_VujBFANJG4qvzKQ&usqp=CAU",
      },
      {
        title: "Larger sized cakes",
        Description:
          "Enkoy our lavishly baked premium quality cakes with your loved ones today.",
        price: "₦500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZHLo9EuR4cVQCJh7w_VujBFANJG4qvzKQ&usqp=CAU",
      },
      {
        title: "Larger sized cakes",
        Description:
          "Enkoy our lavishly baked premium quality cakes with your loved ones today.",
        price: "₦500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZHLo9EuR4cVQCJh7w_VujBFANJG4qvzKQ&usqp=CAU",
      },
      {
        title: "Larger sized cakes",
        Description:
          "Enkoy our lavishly baked premium quality cakes with your loved ones today.",
        price: "₦500",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGZHLo9EuR4cVQCJh7w_VujBFANJG4qvzKQ&usqp=CAU",
      },
    ],
  },
];

// definition of the Items, which will be rendered in the FlatList
const VendorImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart" size={30} color="red" />
    </TouchableOpacity>
  </>
);

const VendorInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray", marginLeft: 10 }}>
        {props.desc}
      </Text>
    </View>
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{props.rating}</Text>
    </View>
  </View>
);

const Item = ({
  name,
  image_url,
  desc,
  rating,
  categories,
  price,
  menuItems,
  aboutpage,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate("VendorDetail", {
          name: name,
          image_url: image_url,
          desc: desc,
          categories: categories,
          price: price,
          rating: rating,
          menuItems: menuItems,
          aboutpage: aboutpage,
        })
      }
    >
      <View style={styles.item}>
        <View style={{ marginTop: 10, padding: 10, backgroundColor: "white" }}>
          <VendorImage image={image_url} />
          <VendorInfo name={name} rating={rating} desc={desc} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// the filter
const VendorItems = ({ searchQuery, setCLicked, navigation }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchQuery === "") {
      return (
        <Item
          name={item.name}
          image_url={item.image_url}
          desc={item.desc}
          categories={item.categories}
          price={item.price}
          rating={item.rating}
          menuItems={item.menuItems}
          aboutpage={item.aboutpage}
        />
      );
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchQuery.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} />;
    }
    // filter of the description
    if (
      item.desc
        .toUpperCase()
        .includes(searchQuery.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item name={item.name} desc={item.desc} />;
    }
  };

  return (
    <View
      onStartShouldSetResponder={() => {
        setCLicked(false);
      }}
      navigation={navigation}
    >
      <FlatList
        scrollEnabled={true}
        data={Vendors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default VendorItems;

const styles = StyleSheet.create({
  list__container: {
    marginTop: 1,
    flex: 1,
    width: "100%",
  },
  item: {
    marginTop: 1,
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
