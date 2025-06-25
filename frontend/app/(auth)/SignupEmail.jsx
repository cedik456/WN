import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SignupEmail = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-4">
      {/* Back Arrow */}
      <Pressable onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>
      <Text className="text-2xl font-bold mb-6">Sign Up with Email</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        className="w-full p-4 mb-4 bg-gray-100 rounded"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full p-4 mb-6 bg-gray-100 rounded"
      />
      <Pressable
        className="items-center p-4 bg-blue-600 rounded"
        onPress={() => console.log({ email, password })}
      >
        <Text className="font-medium text-white">Create Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignupEmail;
