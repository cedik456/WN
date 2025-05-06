import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomepageLogo from "../../../assets/Logo3.png";
import Avatar1 from "../../../assets/Avatars/Avatar1.png";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={HomepageLogo} />
        <Ionicons name="options-outline" size="24" color="#000" />
      </View>
      {/* Card */}
      <View style={styles.card}>
        <Image style={styles.avatar} source={Avatar1} />
        <View style={[styles.flexRow, { marginBottom: 10 }]}>
          <Text style={styles.name}>Charles, 21 </Text>
          <Ionicons name="checkmark-circle" size="20" color="#3b82f6" />
        </View>
        <Text style={styles.job}>Software Engineer</Text>
        <Text style={styles.experience}>3 years of experience</Text>

        {/* Skills */}
        <Text style={styles.skillsTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={[styles.skillPill, styles.bgReact]}>
            <Text style={{ fontSize: 12 }}>React</Text>
          </View>
          <View style={[styles.skillPill, styles.bgMongo]}>
            <Text style={{ fontSize: 12 }}>MongoDb</Text>
          </View>
          <View style={[styles.skillPill, styles.bgJs]}>
            <Text style={{ fontSize: 12 }}>JavaScript</Text>
          </View>
          <View style={[styles.skillPill, styles.bgAngular]}>
            <Text style={{ fontSize: 12 }}>Angular</Text>
          </View>
          <View style={[styles.skillPill, styles.bgTailwind]}>
            <Text style={{ fontSize: 12 }}>Tailwind</Text>
          </View>
          <View style={[styles.skillPill, styles.bgBlack]}>
            <Text style={{ fontSize: 12, color: "white" }}>Github</Text>
          </View>
          <View style={[styles.skillPill, styles.bgPurple]}>
            <Text style={{ fontSize: 12 }}>PHP</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="#5A5A5A" />
        <Ionicons name="reorder-three-outline" size={24} color="#5A5A5A" />
        <Ionicons name="notifications-outline" size={24} color="#5A5A5A" />
        <Ionicons name="person-outline" size={24} color="#5A5A5A" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 25,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },
  avatar: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  experience: {
    color: "#555",
    marginTop: 5,
  },

  job: {
    fontSize: 16,
    fontWeight: 500,
    color: "#333",
  },

  skillsTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 10,
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    maxWidth: "280",
  },

  skillPill: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 9999,
    alignItems: "center",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  bgReact: {
    backgroundColor: "#e0f2fe",
  },
  bgMongo: {
    backgroundColor: "#21EE69",
  },
  bgJs: {
    backgroundColor: "#F7E02A",
  },
  bgAngular: {
    backgroundColor: "#F67C72",
  },
  bgTailwind: {
    backgroundColor: "#A8F3FC",
  },
  bgBlack: {
    backgroundColor: "#000000",
  },
  bgPurple: {
    backgroundColor: "#B0B9E5",
  },
});
