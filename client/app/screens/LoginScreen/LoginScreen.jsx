import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";

import Logo from "../../../assets/WN.png";
import Google from "../../../assets/Socials/Google.png";

import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  return (
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    <View style={styles.container}>
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View>
          <Image style={styles.logo} source={Logo} />
        </View>
        {/* <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#111",
            marginBottom: 8,
          }}
        >
          Welcome to Who's Next!
        </Text> */}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#888",
            marginBottom: 32,
          }}
        >
          Don’t just search. Swipe
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            style={styles.passwordInput}
          />
          <TouchableOpacity>
            <Ionicons name="eye" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        <Text style={{ color: "#888", marginBottom: 16 }}>or</Text>

        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={Google} style={{ width: 30, height: 30 }} />
            <Text style={{ color: "#888", fontWeight: "500" }}>
              Continue with Google
            </Text>
          </View>
        </View>

        {/* <View>
          <Text style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
            Forgot Password?
          </Text>
        </View> */}
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Don't have an account?
          </Text>
          <Pressable
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={{ color: "#888" }}> Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 9999,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 16,
  },

  passwordContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
  },

  button: {
    width: "100%",
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 9999,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
