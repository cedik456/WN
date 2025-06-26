import { createContext, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { Slot, useSegments, useRouter } from 'expo-router';

export const OnboardingContext = createContext();

export default function OnboardingLayout() {
  const segments = useSegments(); // e.g., ['onboarding', 'step1']
  const router = useRouter();

  const steps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];
  const currentStep = segments[segments.length - 1];
  const idx = steps.indexOf(currentStep);
  const isFinal = currentStep === 'step7';

  const [selectedRole, setSelectedRole] = useState(null);

  // Skip layout wrapper on step7 (e.g. thank you page)
  if (isFinal) return <Slot />;

  const goToNextStep = () => {
    const nextStep = idx + 1 === steps.length ? 'step7' : steps[idx + 1];
    router.push(`/${nextStep}`);
  };

  return (
    <OnboardingContext.Provider value={{ selectedRole, setSelectedRole }}>
      <View className="relative flex-1 bg-white">
        {/* Progress Bar */}
        <View className="absolute top-0 left-0 right-0 h-1 bg-gray-300 z-10">
          <View
            style={{
              width: `${((idx + 1) / steps.length) * 100}%`,
              height: '100%',
              backgroundColor: '#000',
            }}
          />
        </View>

        {/* Back Button */}
        {idx > 0 && (
          <Pressable
            className="absolute top-4 right-4 z-20"
            onPress={() => router.back()}
          >
            <Text className="text-blue-600">Back</Text>
          </Pressable>
        )}

        {/* Current Step */}
        <Slot />

        {/* Next Button - always goes forward */}
        <Pressable
          className={`absolute bottom-10 left-6 right-6 rounded-full py-4 ${
            currentStep === 'step1' && !selectedRole
              ? 'bg-gray-300'
              : 'bg-black'
          }`}
          onPress={goToNextStep}
          disabled={currentStep === 'step1' && !selectedRole}
        >
          <Text
            className={`text-center font-semibold ${
              currentStep === 'step1' && !selectedRole
                ? 'text-gray-500'
                : 'text-white'
            }`}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </OnboardingContext.Provider>
  );
}
