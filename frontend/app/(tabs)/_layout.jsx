import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Slot, useRouter } from "expo-router";

const TabLayout = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Slot />
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => {
            router.push("/profile");
            console.log("Helloowww");
          }}
        >
          <Ionicons name="person" size={24} color="#5A5A5A" />
        </TouchableOpacity>

        <FontAwesome6 name="bars-staggered" size={24} color="#5A5A5A" />

        <AntDesign name="like1" size={24} color="black" />

        <MaterialCommunityIcons
          name="message"
          onPress={() => {
            console.log("Navigate to messages");
            router.push("/messages");
          }}
          size={24}
          color="#5A5A5A"
        />
      </View>
    </SafeAreaView>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#eee",
  },
});
