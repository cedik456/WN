import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      edges={["left", "right", "bottom", "top"]}
    >
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
