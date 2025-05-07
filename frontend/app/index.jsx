import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomepageLogo from "../assets/Logo3.png";
import {
  Ionicons,
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
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
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
          <Ionicons
            name="options-outline"
            size={24}
            color="#000"
            onPress={() => router.push("./filters")}
          />
        </View>
      </View>
      <View style={styles.swipeContainer}>
        <Swiper
          cards={mockProfiles}
          renderCard={(card, index) => <ProfileCard key={index} card={card} />}
          // overlayLabels={{
          //   left: {
          //     title: "NOPE",
          //     style: {
          //       label: {
          //         color: "red",
          //         fontSize: 24,
          //         fontWeight: "bold",
          //         backgroundColor: "white",
          //         borderWidth: 2,
          //         borderColor: "red",
          //         padding: 8,
          //         borderRadius: 6,
          //       },
          //       wrapper: {
          //         position: "absolute",
          //         top: 40,
          //         left: 20,
          //         zIndex: 999,
          //       },
          //     },
          //   },
          //   right: {
          //     title: "LIKE",
          //     style: {
          //       label: {
          //         color: "green",
          //         fontSize: 24,
          //         fontWeight: "bold",
          //         backgroundColor: "white",
          //         borderWidth: 2,
          //         borderColor: "green",
          //         padding: 8,
          //         borderRadius: 6,
          //       },
          //       wrapper: {
          //         position: "absolute",
          //         top: 40,
          //         right: 20,
          //         zIndex: 999,
          //       },
          //     },
          //   },
          // }}
          swipeThreshold={50}
          overlayLabelsOpacity={1}
          stackSize={3}
          cardIndex={0}
          useViewOverflow={false}
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

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: 12,
    borderTopColor: "#eee",
    backgroundColor: "white",
  },
});
