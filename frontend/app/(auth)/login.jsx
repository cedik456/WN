import { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);

  return (
    <View className="flex-1 bg-white px-6 pt-16 relative">
      <Text className="text-5xl mt-20 font-extrabold text-center">WN</Text>
      <Text className="text-base text-center text-black mb-20">
        Who's Next?
      </Text>

      <Text className="text-base font-semibold mb-1">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
        placeholder="example@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="text-base font-semibold mb-1">Password</Text>
      <View className="relative mb-4">
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 pr-10"
          secureTextEntry={secure}
          placeholder="••••••••••"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          className="absolute right-3 top-3"
          onPress={() => setSecure(!secure)}
        >
          <Icon name={secure ? 'eye-slash' : 'eye'} size={20} color="#6b7280" />
        </Pressable>
      </View>

      <View className="flex-row items-center justify-between mb-10">
        <View className="flex-row items-center">
          <Pressable onPress={() => setRemember(!remember)}>
            <Icon
              name={remember ? 'check-square' : 'square-o'}
              size={20}
              color={remember ? '#000' : '#6b7280'}
            />
          </Pressable>
          <Text className="ml-2 text-sm">Remember me</Text>
        </View>
        <Pressable onPress={() => router.push('/forgot-password')}>
          <Text className="text-sm text-blue-500">Forgot password?</Text>
        </Pressable>
      </View>

      <Pressable
        className="bg-black rounded-full py-4 mb-10"
        onPress={() => router.push('/step1')}
      >
        <Text className="text-center text-white font-semibold">Login</Text>
      </Pressable>

      <View className="flex-row items-center mb-14">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="px-4 text-center text-gray-400">or sign in with</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      <View className="flex-row justify-center mb-6">
        <Pressable
          onPress={() => router.push('/signup-google')}
          className="mr-6"
        >
          <View className="w-16 h-16 bg-gray-200 rounded-full items-center justify-center">
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
              }}
              style={{ width: 32, height: 32 }}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => router.push('/signup-linkedin')}
          className="mr-6"
        >
          <View className="w-16 h-16 bg-gray-200 rounded-full items-center justify-center">
            <Icon name="linkedin" size={32} color="#0077B5" />
          </View>
        </Pressable>
        <Pressable onPress={() => router.push('/signup-apple')}>
          <View className="w-16 h-16 bg-gray-200 rounded-full items-center justify-center">
            <Icon name="apple" size={32} color="#000000" />
          </View>
        </Pressable>
      </View>

      <Pressable
        className="absolute bottom-9 self-center"
        onPress={() => router.push('/signup')}
      >
        <Text className="text-sm text-gray-600">
          Didn’t have an account?{' '}
          <Text className="text-blue-500">Create an account</Text>
        </Text>
      </Pressable>
    </View>
  );
}
