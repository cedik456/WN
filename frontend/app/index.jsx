import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomepageLogo from "../assets/Logo3.png";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome6,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import ProfileCard from "../components/ProfileCard";
import Avatar2 from "../assets/Avatars/Avatar2.png";
import Avatar3 from "../assets/Avatars/Avatar3.png";
import Avatar5 from "../assets/Avatars/Avatar5.png";
import Avatar6 from "../assets/Avatars/Avatar6.png";

const Home = () => {
  const mockProfiles = [
    {
      name: "Charles, 24",
      job: "Software Engineer",
      experience: "3 years of experience",
      skills: ["React", "MongoDb", "JavaScript", "Tailwind", "Github", "PHP"],
      bgColor: "#fce7f3",
      avatar: Avatar6,
    },
    {
      name: "Isabelle, 23",
      job: "UI/UX Designer",
      experience: "Intern",
      skills: ["Figma", "Sketch", "Adobe XD"],
      bgColor: "#ede9fe",
      avatar: Avatar2,
    },
    {
      name: "Louis, 23",
      job: "Full Stack Developer",
      experience: "2 years of experience",
      skills: ["React", "MongoDb", "Tailwind", "Github"],
      bgColor: "#fbfbfb",
      avatar: Avatar3,
    },
    {
      name: "Mark, 28",
      job: "UI/UX Designer and Developer",
      experience: "1 year of experience",
      skills: ["Figma", "Sketch", "Illustrator", "Adobe XD"],
      bgColor: "#fef9c3",
      avatar: Avatar5,
    },
    {
      name: "Carl, 28",
      job: "Frontend Developer",
      experience: "3 years of experience",
      skills: ["Figma", "JavaScript", "React", "Tailwind"],
      bgColor: "#fbfbfb",
      avatar: Avatar5,
    },
  ];

  return (
    <SafeAreaView style={[styles.safeContainer]} edges={["left", "right"]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={HomepageLogo} />
          <Ionicons name="options-outline" size="24" color="#000" />
        </View>
      </View>
      <View style={styles.swipeContainer}>
        <Swiper
          cards={mockProfiles}
          renderCard={(card) => <ProfileCard card={card} />}
          renderOverlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  color: "red",
                  fontSize: 24,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  color: "green",
                  fontSize: 24,
                },
              },
            },
          }}
          stackSize={3}
          cardIndex={0}
          backgroundColor="transparent"
          cardVerticalMargin={10}
          disableTopSwipe
          disableBottomSwipe
        />
      </View>
      <View style={styles.bottomNav}>
        <Ionicons name="person" size={24} color="#5A5A5A" />
        <FontAwesome6 name="bars-staggered" size={24} color="#5A5A5A" />
        <AntDesign name="like1" size={24} color="black" />
        <MaterialCommunityIcons name="message" size={24} color="#5A5A5A" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  swipeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    overflow: "visible",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  avatar: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
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
    maxWidth: 280,
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
    paddingTop: 12,
    paddingBottom: 12,
    borderTopColor: "#eee",
    backgroundColor: "white",
  },
});
