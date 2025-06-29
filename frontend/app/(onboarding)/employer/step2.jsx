import { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { OnboardingContext } from '../_layout';

export default function CompanyNameScreen() {
  const [companyName, setCompanyName] = useState('');
  const router = useRouter();
  const { selectedRole, onboardingData, setOnboardingData } =
    useContext(OnboardingContext);

  const handleNext = () => {
    if (!companyName || !selectedRole) return;
    setOnboardingData({ ...onboardingData, companyName });
    router.push(`/${selectedRole}/step3`);
  };

  return (
    <View className="relative flex-1 bg-white px-6 pt-6">
      <View>
        <Text className="text-4xl font-bold mb-4">What's your company's name?</Text>
        <TextInput
          className="border-b-2 border-gray-300 py-2 text-lg mb-4"
          placeholder="Enter your company name"
          value={companyName}
          onChangeText={setCompanyName}
          autoFocus
        />
        <Text className="text-gray-500 text-md mb-1">
          This is how it will appear on your profile
        </Text>
        <Text className="text-black font-semibold text-md mb-4">
          It cannot be changed later.
        </Text>
      </View>

      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          !companyName ? 'bg-gray-300' : 'bg-black'
        }`}
        onPress={handleNext}
        disabled={!companyName}
      >
        <Text
          className={`text-center font-semibold ${
            !companyName ? 'text-gray-500' : 'text-white'
          }`}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
}
