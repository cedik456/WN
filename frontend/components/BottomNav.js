import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Ionicons,
  FontAwesome6,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BottomNav = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Ionicons
        name="person"
        size={24}
        color="#5A5A5A"
        onPress={() => router.push('/login')}
      />
      <FontAwesome6
        name="bars-staggered"
        size={24}
        color="#5A5A5A"
        onPress={() => router.push('/filters')}
      />
      <AntDesign
        name="like1"
        size={24}
        color="black"
        onPress={() => router.push('/')}
      />
      <MaterialCommunityIcons
        name="message"
        size={24}
        color="#5A5A5A"
        onPress={() => router.push('/signup')}
      />
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 12,
    borderTopColor: '#eee',
    backgroundColor: 'white',
  },
});
