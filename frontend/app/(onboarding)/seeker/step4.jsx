import { View, Text, Pressable, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { useRouter } from 'expo-router';
import { OnboardingContext } from '../_layout';

const skillOptions = [
  'Javascript',
  'PHP',
  'Figma',
  'Laravel',
  'React',
  'IT support',
  'Angular',
];

export default function SeekerSkillsScreen() {
  const router = useRouter();
  const { onboardingData, setOnboardingData } = useContext(OnboardingContext);
  const firstName = onboardingData.firstName || 'there';

  const [selectedSkills, setSelectedSkills] = useState(onboardingData.skills || []);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : prev.length < 8
        ? [...prev, skill]
        : prev
    );
  };

  const handleNext = () => {
    if (selectedSkills.length >= 3 && selectedSkills.length <= 8) {
      setOnboardingData({ ...onboardingData, skills: selectedSkills });
       router.push(`/${selectedRole}/step5`);

    }
  };

  return (
    <View className="relative flex-1">
      <ScrollView className="px-6 pt-6 pb-28">
        <Text className="text-4xl font-bold mb-2">
          {`Let’s talk about your skills, ${firstName}`}
        </Text>

        <Text className="text-md text-gray-600 mb-5">
          Select 3 to 8 professional skills that match your expertise.
        </Text>

        <View className="flex-row flex-wrap mb-6">
          {skillOptions.map((skill) => (
            <Pressable
              key={skill}
              onPress={() => toggleSkill(skill)}
              className={`px-4 py-2 rounded-md border mr-2 mb-2 ${
                selectedSkills.includes(skill) ? 'bg-black' : 'border-gray-300'
              }`}
            >
              <Text className={selectedSkills.includes(skill) ? 'text-white' : 'text-black'}>
                {skill}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text className="text-gray-600 text-md">
          This information will help you find a suitable job.
        </Text>
      </ScrollView>

      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          selectedSkills.length >= 3 && selectedSkills.length <= 8 ? 'bg-black' : 'bg-gray-300'
        }`}
        onPress={handleNext}
        disabled={selectedSkills.length < 3 || selectedSkills.length > 8}
      >
        <Text
          className={`text-center font-semibold ${
            selectedSkills.length >= 3 && selectedSkills.length <= 8
              ? 'text-white'
              : 'text-gray-500'
          }`}
        >
          Next
        </Text>
      </Pressable>
    </View>
  );
}
