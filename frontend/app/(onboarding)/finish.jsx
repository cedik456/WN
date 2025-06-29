import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { OnboardingContext } from './_layout';

export default function Finish() {
  const router = useRouter();
  const { selectedRole } = useContext(OnboardingContext);
  const matchTarget = selectedRole === 'employer' ? 'candidates' : 'employers';

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center items-center space-y-6">
        <Text className="text-4xl font-bold text-center mb-2">You're all set!</Text>
        <Text className="text-md text-center">
          {`We'll match you with the right ${matchTarget} nearby.`}
        </Text>
        <Text className="text-md text-gray-600 text-center mb-6">
          You can update your profile anytime in the Settings.
        </Text>
        <Pressable
          className="w-full rounded-full py-4 bg-black"
          onPress={() => router.push('/(tabs)')}
        >
          <Text className="text-center text-white font-semibold">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
