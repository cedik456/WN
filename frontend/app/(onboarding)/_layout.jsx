import { createContext, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { Slot, useSegments, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export const OnboardingContext = createContext();

export default function OnboardingLayout() {
  const segments = useSegments(); // e.g., ['onboarding', 'step1']
  const router = useRouter();

  const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];
  const currentStep = segments[segments.length - 1];
  const idx = steps.indexOf(currentStep);
  const isFinal = currentStep === 'step7';

  const [selectedRole, setSelectedRole] = useState(null);
  // accumulate all form entries here
  const [onboardingData, setOnboardingData] = useState({});

  // Skip layout wrapper on step7 (e.g. thank you page)
  if (isFinal) return <Slot />;

  const goToNextStep = () => {
    const nextStep = idx + 1 === steps.length ? 'step7' : steps[idx + 1];
    router.push(`/${nextStep}`);
  };

  return (
    <OnboardingContext.Provider
      value={{
        selectedRole,
        setSelectedRole,
        onboardingData,
        setOnboardingData,
      }}
    >
      <SafeAreaView edges={['top']} className="relative flex-1 bg-white">
        {/* Progress Bar */}
        <View className="absolute top-safe left-0 right-0 h-1 bg-gray-300 z-10">
          <View
            style={{
              width: `${((idx + 1) / steps.length) * 100}%`,
              height: '100%',
              backgroundColor: '#000',
            }}
          />
        </View>

        {/* skip/back row */}
        <View className="absolute top-safe left-4 right-6 mt-2 flex-row justify-between z-20">
          {idx > 0 ? (
            <Pressable onPress={() => router.back()} className="p-1">
              <Ionicons name="arrow-back" size={28} color="#000" />
            </Pressable>
          ) : (
            <View /> // placeholder to keep spacing
          )}
          {idx === 2 ? (
            <Pressable onPress={goToNextStep} className="p-1">
              <Text className="text-gray-500 text-xl">Skip</Text>
            </Pressable>
          ) : (
            <View /> // placeholder when skip is hidden
          )}
        </View>

        {/* step content with padding */}
        <View className="flex-1 pt-safe mt-4">
          <Slot />
        </View>
      </SafeAreaView>
    </OnboardingContext.Provider>
  );
}
