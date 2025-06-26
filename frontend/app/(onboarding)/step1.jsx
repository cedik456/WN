import { View, Text, Pressable } from 'react-native';
import { useContext } from 'react';
import { OnboardingContext } from './_layout';

export default function RoleSelectionScreen() {
  const { selectedRole, setSelectedRole } = useContext(OnboardingContext);

  return (
    <View className="flex-1 bg-white px-6 pt-12">
      <Text className="text-xl font-bold mb-2">What is role?</Text>
      <Text className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Text>

      <Pressable
        className={`border rounded-lg p-4 mb-6 ${
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
        className={`border rounded-lg p-4 mb-6 ${
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

      <Text className="text-blue-600 underline mb-12">
        Learn why we asks for this info.
      </Text>

      {/* remove this step’s Next button entirely */}
    </View>
  );
}
