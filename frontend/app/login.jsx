import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Logo from '../assets/Logo2.png';
import Google from '../assets/Socials/Google.png';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    /* if (email === "cedric@gmail.com" && password === "123456") {
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    } */
    // Jonks lang auto push agad
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <View>
          <Image style={styles.logo} source={Logo} />
        </View>
        <Text style={styles.phrase}>Swipe, Match, Hire</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#888"
            secureTextEntry={true}
            style={styles.passwordInput}
          />
          <TouchableOpacity>
            <Ionicons name="eye" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

        <Text style={{ color: '#888', marginBottom: 16 }}>or</Text>

        <View style={styles.socialsContainer}>
          <View style={styles.flexRow}>
            <Image source={Google} style={styles.socialsIcon} />
            <Text style={styles.socialsText}>Continue with Google</Text>
          </View>
        </View>
        {/* <View>
          <Text style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
            Forgot Password?
          </Text>
        </View> */}
      </View>
      <View style={styles.forgotPasswordContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.forgotPasswordText}>Don't have an account?</Text>
          <Pressable
            style={styles.alignCenter}
            onPress={() => router.push('/signup')}
          >
            <Text style={{ color: '#888' }}> Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },

  inputsContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  phrase: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 9999,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 16,
  },

  passwordContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
  },

  button: {
    width: '100%',
    backgroundColor: 'black',
    paddingVertical: 14,
    borderRadius: 9999,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },

  socialsContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialsText: {
    color: '#888',
    fontWeight: '500',
  },

  socialsIcon: {
    width: 30,
    height: 30,
  },

  forgotPasswordContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordText: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
