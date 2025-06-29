import { View, Text, Pressable, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useContext } from 'react';
import { useRouter } from 'expo-router';
import { OnboardingContext } from '../_layout';

export default function JobPreferencesScreen() {
  const router = useRouter();
  const { selectedRole, onboardingData, setOnboardingData } = useContext(OnboardingContext);
  const firstName = onboardingData.firstName || 'placeholder';

  const [jobType, setJobType] = useState(onboardingData.jobType || '');
  const [environment, setEnvironment] = useState(
    onboardingData.environment || ''
  );
  const [experience, setExperience] = useState(onboardingData.experience || '');

  const handleNext = () => {
    if (jobType && environment && experience) {
      setOnboardingData({
        ...onboardingData,
        jobType,
        environment,
        experience,
      });
    router.push(`/${selectedRole}/step4`);
    }
  };

  const experienceOptions = [
    '1yr of experience',
    '2yrs of experience',
    '3yrs of experience',
    '4yrs of experience',
    '5+ yrs of experience',
  ];

  const renderOption = (label, value, selected, setSelected) => (
    <Pressable
      className={`px-4 py-2 rounded-full border mr-2 mb-2 ${
        selected === value ? 'bg-black' : 'border-gray-300'
      }`}
      onPress={() => setSelected(value)}
    >
      <Text className={selected === value ? 'text-white' : 'text-black'}>
        {label}
      </Text>
    </Pressable>
  );

  return (
    <View className="relative flex-1 bg-white">
      <ScrollView className="px-6 pt-6 pb-28">
        <Text className="text-4xl font-bold mb-2">
          {`Let’s talk about what you want, ${firstName}.`}
        </Text>

        <Text className="text-md text-gray-600 mb-1">
          This step will help employers make an informed decision when
          considering hiring you and help you find the right job that fits your
          needs.
        </Text>

        <View className="h-0.5 bg-gray-200 mb-4" />

        <Text className="text-xl font-semibold mb-2">
          What job type do you want?
        </Text>
        <View className="flex-row flex-wrap mb-4">
          {renderOption('Full-time', 'full-time', jobType, setJobType)}
          {renderOption('Part-time', 'part-time', jobType, setJobType)}
          {renderOption('Internship', 'internship', jobType, setJobType)}
        </View>

        <View className="h-0.5 bg-gray-200 mb-4" />

        <Text className="text-xl font-semibold mb-2">
          What job environment you want?
        </Text>
        <View className="flex-row flex-wrap mb-4">
          {renderOption('On-site', 'on-site', environment, setEnvironment)}
          {renderOption('Remote', 'remote', environment, setEnvironment)}
          {renderOption('Hybrid', 'hybrid', environment, setEnvironment)}
        </View>

        <View className="h-0.5 bg-gray-200 mb-4" />

        <Text className="text-xl font-semibold mb-2">
          How many years of experience do you have?
        </Text>
        <View className="mb-1">
          <Picker
            selectedValue={experience}
            onValueChange={(itemValue) => setExperience(itemValue)}
          >
            <Picker.Item label="Select experience" value="" />
            {experienceOptions.map((exp, i) => (
              <Picker.Item key={i} label={exp} value={exp} />
            ))}
          </Picker>
        </View>

        <View className="h-0.5 bg-gray-200 mb-4" />

        <Text className="text-gray-500 text-md mb-1">
          This is how it will appear on your profile
        </Text>
        <Text className="text-black font-semibold text-md mb-4">
          It cannot be changed later.
        </Text>

        <Text className="text-blue-600 mb-12">
          Learn why we ask for this info.
        </Text>
      </ScrollView>

      <Pressable
        className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
          jobType && environment && experience ? 'bg-black' : 'bg-gray-300'
        }`}
        onPress={handleNext}
        disabled={!(jobType && environment && experience)}
      >
        <Text
          className={`text-center font-semibold ${
            jobType && environment && experience
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
