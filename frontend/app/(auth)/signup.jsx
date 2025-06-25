import { Text, View, SafeAreaView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="justify-between flex-1 px-6 py-10 bg-black">
        {/* Logo */}
        <View className="items-center flex-1 space-y-2 mt-60">
          {/* Change to image to change the logo */}
          <Text className="text-4xl font-bold text-white">Who's Next?</Text>
          <Text className="text-sm font-medium text-white">
            Swipe, Match, Hire
          </Text>
        </View>

        {/* Info about creating account */}
        <View className="items-center px-5 mt-12 mb-5">
          <Text className="text-xs font-medium text-center text-white">
            By tapping ‘Create account’ or ‘Sign in’ you agree to our Terms.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-1">
          <Pressable
            className="items-center p-4 m-2 bg-white rounded-full"
            onPress={() => router.push('/(auth)/SignupGoogle')}
          >
            <Text className="font-medium text-black">Continue with Google</Text>
          </Pressable>

          <Pressable
            className="items-center p-4 m-2 bg-white rounded-full"
            onPress={() => router.push('/(auth)/SignupEmail')}
          >
            <Text className="font-medium text-black">
              Create account with Email
            </Text>
          </Pressable>

          <Pressable
            className="items-center p-4 m-2 bg-white rounded-full"
            onPress={() => router.push('/(auth)/SignupPhone')}
          >
            <Text className="font-medium text-black">
              Use cell phone number
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View className="items-center mt-6 mb-10">
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text className="text-sm text-white underline">
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
