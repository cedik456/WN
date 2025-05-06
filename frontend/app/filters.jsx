import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";

const cards = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

const Filters = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Text style={styles.text}>{card.name}</Text>
          </View>
        )}
        renderOverlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "white",
                borderColor: "red",
                color: "red",
                borderWidth: 2,
                fontSize: 24,
                fontWeight: "bold",
                padding: 10,
                borderRadius: 8,
              },
              wrapper: {
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 999,
              },
            },
          },
          right: {
            title: "LIKE",
            style: {
              label: {
                backgroundColor: "white",
                borderColor: "green",
                color: "green",
                borderWidth: 2,
                fontSize: 24,
                fontWeight: "bold",
                padding: 10,
                borderRadius: 8,
              },
              wrapper: {
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 999,
              },
            },
          },
        }}
        stackSize={3}
        cardIndex={0}
        backgroundColor="white"
        disableTopSwipe
        disableBottomSwipe
        onSwipedLeft={() => console.log("NOPE")}
        onSwipedRight={() => console.log("LIKE")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  card: {
    flex: 0.6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Filters;
