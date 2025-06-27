import { View, Text, Pressable } from 'react-native';
import { useContext } from 'react';
import { OnboardingContext } from './_layout';
import { useRouter } from 'expo-router';

export default function RoleSelectionScreen() {
  const { selectedRole, setSelectedRole } = useContext(OnboardingContext);
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 pt-6">
      <Text className="text-4xl font-bold mb-2">What is your role?</Text>
      <Text className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>

      <Pressable
        className={`border rounded-lg p-4 mb-5 ${
          selectedRole === 'seeker' ? 'bg-black' : 'border-gray-300'
        }`}
        onPress={() => setSelectedRole('seeker')}
      >
        <Text
          className={`text-center ${
            selectedRole === 'seeker' ? 'text-white' : 'text-black'
          }`}
        >
          Job Seeker
        </Text>
      </Pressable>

      <Pressable
        className={`border rounded-lg p-4 mb-5 ${
          selectedRole === 'employer' ? 'bg-black' : 'border-gray-300'
        }`}
        onPress={() => setSelectedRole('employer')}
      >
        <Text
          className={`text-center ${
            selectedRole === 'employer' ? 'text-white' : 'text-black'
          }`}
        >
          Employer
        </Text>
      </Pressable>

      <Text className="text-blue-600 mb-12">
        Learn why we ask for this info.
      </Text>

      {/* step‐level Next button */}
      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          !selectedRole ? 'bg-gray-300' : 'bg-black'
        }`}
        onPress={() => selectedRole && router.push(`/${selectedRole}/step2`)}
        disabled={!selectedRole}
      >
        <Text
          className={`text-center font-semibold ${
            !selectedRole ? 'text-gray-500' : 'text-white'
          }`}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
}
