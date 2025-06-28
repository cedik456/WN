import { useRouter } from 'expo-router';
import { SafeAreaView, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignupGoogle = () => {
  const router = useRouter();
  const handleGoogleAuth = () => {
    console.log('Google Auth initiated');
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pt-4">
      <Pressable onPress={() => router.back()} className="mb-4">
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>
      <Text className="text-2xl font-bold mb-6">Sign Up with Google</Text>
      <Pressable
        className="items-center p-4 bg-red-600 rounded"
        onPress={handleGoogleAuth}
      >
        <Text className="font-medium text-white">Continue with Google</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignupGoogle;
