import { Stack, useSegments } from 'expo-router';
import BottomNav from '../components/BottomNav';

export default function RootLayout() {
  const segments = useSegments();
  const hiddenRoutes = ['login', 'signup'];
  const isHidden = segments.some((seg) => hiddenRoutes.includes(seg));
  return (
    <>
      <Stack
        screenOptions={({ route }) => ({
          headerShown: false,
          animation: route.params?.anim || 'slide_from_right',
        })}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="index" />
        <Stack.Screen name="filters" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="messages" />
      </Stack>
      {!isHidden && <BottomNav />}
    </>
  );
}
