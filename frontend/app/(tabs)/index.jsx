import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-deck-swiper';
import ProfileCard from '../../components/ProfileCard';
import Avatar1 from '../../assets/Avatars/Avatar1.png';
import Avatar2 from '../../assets/Avatars/Avatar2.png';
import Avatar3 from '../../assets/Avatars/Avatar3.png';
import Avatar5 from '../../assets/Avatars/Avatar5.png';
import Avatar6 from '../../assets/Avatars/Avatar6.png';
import { useRouter } from 'expo-router';
import HomepageLogo from '../../assets/Logo3.png';

const Home = () => {
  const router = useRouter();
  const mockProfiles = [
    {
      name: 'Charles, 24',
      job: 'Software Engineer',
      experience: '3 years of experience',
      skills: ['React', 'MongoDb', 'JavaScript', 'Tailwind', 'Github', 'PHP'],
      bgColor: '#fce7f3',
      avatar: Avatar6,
    },
    {
      name: 'Isabelle, 23',
      job: 'UI/UX Designer',
      experience: 'Intern',
      skills: ['Figma', 'Sketch', 'Adobe XD'],
      bgColor: '#ede9fe',
      avatar: Avatar2,
    },
    {
      name: 'Louis, 23',
      job: 'Full Stack Developer',
      experience: '2 years of experience',
      skills: ['React', 'MongoDb', 'Tailwind', 'Github'],
      bgColor: '#fbfbfb',
      avatar: Avatar3,
    },
    {
      name: 'Mark, 28',
      job: 'UI/UX Designer and Developer',
      experience: '1 year of experience',
      skills: ['Figma', 'Sketch', 'Illustrator', 'Adobe XD'],
      bgColor: '#fef9c3',
      avatar: Avatar5,
    },
    {
      name: 'Carl, 28',
      job: 'Frontend Developer',
      experience: '3 years of experience',
      skills: ['Figma', 'JavaScript', 'React', 'Tailwind'],
      bgColor: '#fbfbfb',
      avatar: Avatar1,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right', 'bottom']}>
      <View className="px-6 py-4 bg-white shadow-sm">
        <View className="flex-row items-center justify-between">
          <Image source={HomepageLogo} />
          <Ionicons
            name="options-outline"
            size={28}
            color="#333"
            onPress={() => router.push('./filters')}
          />
        </View>
      </View>
      <View className="flex-1 items-center justify-center px-4 pb-32">
        <Swiper
          cards={mockProfiles}
          renderCard={(card, index) => <ProfileCard key={index} card={card} />}
          // overlayLabels={{
          //   left: {
          //     title: "NOPE",
          //     style: {
          //       label: {
          //         color: "red",
          //         fontSize: 24,
          //         fontWeight: "bold",
          //         backgroundColor: "white",
          //         borderWidth: 2,
          //         borderColor: "red",
          //         padding: 8,
          //         borderRadius: 6,
          //       },
          //       wrapper: {
          //         position: "absolute",
          //         top: 40,
          //         left: 20,
          //         zIndex: 999,
          //       },
          //     },
          //   },
          //   right: {
          //     title: "LIKE",
          //     style: {
          //       label: {
          //         color: "green",
          //         fontSize: 24,
          //         fontWeight: "bold",
          //         backgroundColor: "white",
          //         borderWidth: 2,
          //         borderColor: "green",
          //         padding: 8,
          //         borderRadius: 6,
          //       },
          //       wrapper: {
          //         position: "absolute",
          //         top: 40,
          //         right: 20,
          //         zIndex: 999,
          //       },
          //     },
          //   },
          // }}
          containerStyle={{ flex: 1, backgroundColor: 'transparent' }}
          style={{ flex: 1 }}
          verticalSwipe={false}
          disableTopSwipe
          disableBottomSwipe
          stackSize={3}
          stackSeparation={15}
          animateCardOpacity
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;