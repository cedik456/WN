import { createContext, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { Slot, useSegments, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export const OnboardingContext = createContext();

export default function OnboardingLayout() {
  const segments = useSegments();
  const router = useRouter();

  const seekerSteps = ['step1', 'step2', 'step3', 'step4', 'step5'];
  const employerSteps = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];
  const steps = selectedRole === 'employer' ? employerSteps : seekerSteps;

  const currentStep = segments[segments.length - 1];
  const idx = steps.indexOf(currentStep);
  const isFinal = currentStep === 'finish';

  const [selectedRole, setSelectedRole] = useState(null);
  const [onboardingData, setOnboardingData] = useState({});

  const goToNextStep = () => {
    const nextStep = idx + 1 === steps.length ? 'finish' : steps[idx + 1];
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
        {!isFinal && (
          <>
            <View className="absolute top-safe left-0 right-0 h-1 bg-gray-300 z-10">
              <View
                style={{
                  width: `${((idx + 1) / steps.length) * 100}%`,
                  height: '100%',
                  backgroundColor: '#000',
                }}
              />
            </View>

            <View className="absolute top-safe left-4 right-6 mt-2 flex-row justify-between z-20">
              {idx > 0 ? (
                <Pressable onPress={() => router.back()} className="p-1">
                  <Ionicons name="arrow-back" size={28} color="#000" />
                </Pressable>
              ) : (
                <View />
              )}
              {idx > 1 ? (
                <Pressable onPress={goToNextStep} className="p-1">
                  <Text className="text-gray-500 text-xl">Skip</Text>
                </Pressable>
              ) : (
                <View />
              )}
            </View>
          </>
        )}

        <View className="flex-1 pt-safe mt-4">
          <Slot />
        </View>
      </SafeAreaView>
    </OnboardingContext.Provider>
  );
}
