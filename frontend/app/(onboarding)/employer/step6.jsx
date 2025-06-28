import { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { OnboardingContext } from '../_layout';

export default function JobDescriptionScreen() {
  const [description, setDescription] = useState('');
  const router = useRouter();
  const { selectedRole, onboardingData, setOnboardingData } = useContext(OnboardingContext);

  const handleFinish = () => {
    if (!description || !selectedRole) return;
    setOnboardingData({ ...onboardingData, jobDescription: description });
    router.push(`../finish`);
  };

  return (
    <View className="relative flex-1 bg-white px-6 pt-6">
      <View>
        <Text className="text-4xl font-bold mb-4">Tell us about the role</Text>
        <TextInput
          className="border border-gray-300 rounded-md py-3 px-4 text-md mb-4"
          placeholder="Enter detailed job description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={6}
          style={{ textAlignVertical: 'top' }}
          autoFocus
        />
        <Text className="text-gray-500 text-md mb-1">
          This description will be visible to candidates.
        </Text>
      </View>

      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          description ? 'bg-black' : 'bg-gray-300'
        }`}
        onPress={handleFinish}
        disabled={!description}
      >
        <Text
          className={`text-center font-semibold ${
            description ? 'text-white' : 'text-gray-500'
          }`}
        >
          Finish
        </Text>
      </Pressable>
    </View>
  );
}
