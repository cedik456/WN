import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={{ flex: 1 }}
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
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 9999,
            backgroundColor: "black",
            marginBottom: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
            WH
          </Text>
        </View>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#111",
            marginBottom: 8,
          }}
        >
          Welcome to Who's Next!
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: "#888",
            marginBottom: 32,
          }}
        >
          Don’t just search. Swipe.
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#f1f1f1",
            borderRadius: 25,
            paddingHorizontal: 20,
            marginBottom: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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

        <View>
          <Text style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
            Forgot Password?
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 14 }}>
          Don't have an account?
          <Text style={{ color: "#888" }}> Register</Text>
        </Text>
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
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 9999,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 16,
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
