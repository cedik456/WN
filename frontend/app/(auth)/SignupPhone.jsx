import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const SignupPhone = () => {
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View className="flex-1 bg-white">
      <StatusBar
        backgroundColor="white"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'dark-content'}
      />

      <SafeAreaView className="flex-1 px-6 pt-12 bg-white">
        <Ionicons name="arrow-back" size={20} color="#000" />
        <Text className="text-[24px] font-bold text-black leading-8 ml-5">
          Can we get your number{'\n'}please?
        </Text>

        <Text className="mt-3 mb-8 ml-5 text-base leading-6 text-gray-600">
          We only use phone numbers to make sure{'\n'}
          everyone on Who’s Next? is real.
        </Text>

        {/* INPUT */}
        <View className="flex-row mb-6 space-x-4">
          {/* CHANGE IF DONE INSTALLING THE COUNTRY PICKER */}
          <TextInput
            placeholder="Country"
            placeholderTextColor="#999"
            className="flex-1 px-4 py-3 ml-5 text-black bg-white border border-gray-300 rounded-lg"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            className="flex-1 px-4 py-3 ml-2 mr-5 text-black bg-white border border-gray-300 rounded-lg"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Notifying user for the privacy */}
        <Text className="mb-10 ml-5 text-sm text-gray-400">
          We never share this with anyone and it won’t be on your profile
        </Text>

        <View className="items-end">
          <Pressable
            className="items-center justify-center w-12 h-12 mr-5 bg-gray-200 rounded-full active:opacity-80"
            onPress={() => {
              // Replace with navigation or validation
              console.log({ country, phone });
            }}
          >
            <Ionicons name="arrow-forward" size={20} color="#000" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupPhone;
