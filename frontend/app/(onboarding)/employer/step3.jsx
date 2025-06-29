import { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { OnboardingContext } from '../_layout';

export default function HiringPositionScreen() {
  const [position, setPosition] = useState('');
  const router = useRouter();
  const { selectedRole, onboardingData, setOnboardingData } =
    useContext(OnboardingContext);

  const handleNext = () => {
    if (!position || !selectedRole) return;
    setOnboardingData({ ...onboardingData, hiringPosition: position });
    router.push(`/${selectedRole}/step4`);
  };

  return (
    <View className="relative flex-1 bg-white px-6 pt-6">
      <View>
        <Text className="text-4xl font-bold mb-4">What position are you hiring for?</Text>
        <TextInput
          className="border-b-2 border-gray-300 py-2 text-lg mb-4"
          placeholder="Enter job position"
          value={position}
          onChangeText={setPosition}
          autoFocus
        />
        <Text className="text-gray-500 text-md mb-1">
          This will be shown to job seekers in their search.
        </Text>
        <Text className="text-black font-semibold text-md mb-4">
          You can update this later in the Settings.
        </Text>
      </View>

      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          !position ? 'bg-gray-300' : 'bg-black'
        }`}
        onPress={handleNext}
        disabled={!position}
      >
        <Text
          className={`text-center font-semibold ${
            !position ? 'text-gray-500' : 'text-white'
          }`}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
}

