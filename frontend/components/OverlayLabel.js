import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OverlayLabel = ({ text, color }) => {
  return (
    <View style={[styles.overlay, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
};

export default OverlayLabel;

const styles = StyleSheet.create({
  overlay: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
