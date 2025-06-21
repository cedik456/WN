import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Avatar6 from "../../assets/Avatars/Avatar6.png";

const Profile = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Profile</Text>
        <Ionicons name="settings-outline" size={24} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            borderWidth: 2,
            borderColor: "#000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={Avatar6}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View style={{ gap: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Charles</Text>
            <Ionicons name="checkmark-circle-outline" size={24} />
          </View>
          <View style={[styles.wrapper, { backgroundColor: "#E0E0E0" }]}>
            <Text>Complete Profile</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.wrapper,
              { backgroundColor: "black", color: "white" },
            ]}
          >
            Profile Insights
          </Text>
          <Text>Job Application</Text>
          <Text>Certification</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ gap: 20, marginBottom: 50 }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              height: 150,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Portfolio</Text>
              <Ionicons name="add-outline" size={24} color="#000" />
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              height: 150,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Projects</Text>
              <Ionicons name="add-outline" size={24} color="#000" />
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 10,
              height: 150,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Experience
              </Text>
              <Ionicons name="add-outline" size={24} color="#000" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
});
