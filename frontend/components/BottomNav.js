import { View, StyleSheet, Pressable } from 'react-native';
import {
  Ionicons,
  FontAwesome6,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';

const BottomNav = () => {
  const router = useRouter();
  const segments = useSegments();
  const current = segments[segments.length - 1] || 'index';
  const tabs = ['profile', 'filters', 'index', 'messages'];
  const navigateTab = (name, path) => {
    if (name === current) return;
    const fromIdx = tabs.indexOf(current);
    const toIdx = tabs.indexOf(name);
    const anim = toIdx > fromIdx ? 'slide_from_right' : 'slide_from_left';
    router.push({ pathname: path, params: { anim } });
  };
  const getColor = (name) => (name === current ? 'black' : '#5A5A5A');

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigateTab('profile', '/profile')}
      >
        <Ionicons name="person" size={24} color={getColor('profile')} />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigateTab('filters', '/filters')}
      >
        <FontAwesome6
          name="bars-staggered"
          size={24}
          color={getColor('filters')}
        />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigateTab('index', '/')}
      >
        <AntDesign name="like1" size={24} color={getColor('index')} />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigateTab('messages', '/messages')}
      >
        <MaterialCommunityIcons
          name="message"
          size={24}
          color={getColor('messages')}
        />
      </Pressable>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 12,
    borderTopColor: '#eee',
    backgroundColor: 'white',
    zIndex: 100,
  },
  button: {
    padding: 10,
  },
});
