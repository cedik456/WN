import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Slot, useRouter, useSegments } from 'expo-router';

const TabLayout = () => {
  const router = useRouter();
  const segments = useSegments();
  const active = segments[segments.length - 1];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Slot />
      <View className="flex-row justify-around items-center h-16 bg-white border-t border-gray-200">
        <TouchableOpacity
          className="flex-1 items-center justify-center"
          onPress={() => router.push('/profile')}
        >
          <Ionicons
            name="person"
            size={24}
            color={active === 'profile' ? '#000' : '#888'}
          />
          <Text
            className={`text-xs mt-1 ${
              active === 'profile' ? 'text-black' : 'text-gray-500'
            }`}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center justify-center"
          onPress={() => router.push('/')}
        >
          <FontAwesome6
            name="bars-staggered"
            size={24}
            color={active === 'index' ? '#000' : '#888'}
          />
          <Text
            className={`text-xs mt-1 ${
              active === 'index' ? 'text-black' : 'text-gray-500'
            }`}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center justify-center"
        >
          <AntDesign
            name="like1"
            size={24}
            color={active === 'likes' ? '#000' : '#888'}
          />
          <Text
            className={`text-xs mt-1 ${
              active === 'likes' ? 'text-black' : 'text-gray-500'
            }`}
          >
            Likes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center justify-center"
          onPress={() => router.push('/messages')}
        >
          <MaterialCommunityIcons
            name="message"
            size={24}
            color={active === 'messages' ? '#000' : '#888'}
          />
          <Text
            className={`text-xs mt-1 ${
              active === 'messages' ? 'text-black' : 'text-gray-500'
            }`}
          >
            Messages
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TabLayout;
