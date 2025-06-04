import 'nativewind/patch';
import { styled } from 'nativewind';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Slot, useRouter } from 'expo-router';

//needs styled wrapper for tailwind to work
const IonIcon = styled(Ionicons);
const FAIcon = styled(FontAwesome6);
const ADIcon = styled(AntDesign);
const MCIcon = styled(MaterialCommunityIcons);

const TabLayout = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Slot />
      <View className="absolute bottom-0 w-full h-18 flex-row justify-around items-center bg-white border-t border-gray-200">
        <TouchableOpacity
          onPress={() => {
            router.push('/profile');
          }}
        >
          <IonIcon name="person" size={24} className="text-gray-500" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push('/');
          }}
        >
          <FAIcon name="bars-staggered" size={24} className="text-gray-500" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // router.push('wherever this button goes');
          }}
        >
          <ADIcon name="like1" size={24} className="text-black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push('/messages');
          }}
        >
          <MCIcon name="message" size={24} className="text-gray-500" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TabLayout;
