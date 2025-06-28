import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { useRouter } from 'expo-router';
import { OnboardingContext } from '../_layout';

export default function LocationScreen() {
  const router = useRouter();
  const { onboardingData, setOnboardingData } = useContext(OnboardingContext);

  const [location, setLocation] = useState(onboardingData.location || '');

  const handleNext = () => {
    if (location.trim()) {
      setOnboardingData({
        ...onboardingData,
        location,
      });
          router.push(`/${selectedRole}/step5`);
    }
  };

  return (
    <View className="relative flex-1">
      <ScrollView className="px-6 pt-6 pb-28">
        <Text className="text-4xl font-bold mb-2">Location</Text>
        <Text className="text-md text-gray-600 mb-5">
          This will help job seekers decide if the company is a good fit for them.
        </Text>

        <TextInput
          className="border-b border-gray-300 mb-8 text-md text-black py-2"
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#999"
        />

        <Text className="text-blue-600 text-sm mb-12">
          Learn about our privacy policy.
        </Text>
      </ScrollView>

      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          location.trim() ? 'bg-black' : 'bg-gray-300'
        }`}
        onPress={handleNext}
        disabled={!location.trim()}
      >
        <Text
          className={`text-center font-semibold ${
            location.trim() ? 'text-white' : 'text-gray-500'
          }`}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
}
