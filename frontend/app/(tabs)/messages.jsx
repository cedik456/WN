import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Avatar6 from '../../assets/Avatars/Avatar6.png';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
      </View>
      <Text style={styles.subtitle}>Your Matches</Text>
      <View style={styles.placeholderCard}>
        <View style={styles.placeholderImage} />
        <View style={styles.placeholderTextContainer}>
          <Text style={styles.placeholderText}>
            Employers are waiting to talk to you.
          </Text>
          <Text style={styles.placeholderText}>
            Like them back to start chatting.
          </Text>
          <Text style={[styles.placeholderText, styles.underline]}>
            See who likes you.
          </Text>
        </View>
      </View>
      <View style={styles.recentsHeader}>
        <Text style={styles.recentsTitle}>Chats (Recent)</Text>
        <Ionicons name="reorder-three-outline" size={24} />
      </View>
      <View style={styles.openingContainer}>
        <Text style={styles.openingLabel}>Your Opening Chat</Text>
        <View style={styles.openingBox}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="arrow-forward-circle-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.chats}>
        <View style={styles.chatItem}>
          <Image source={Avatar6} style={styles.chatAvatar} />
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Charles</Text>
            <Text style={styles.chatSnippet}>Hi, How are you?</Text>
            <Text style={styles.chatExpiry}>expires in 24 hours</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  chats: {
    paddingBottom: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  chatAvatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
  },
  chatInfo: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  chatSnippet: {
    fontSize: 15,
  },
  chatExpiry: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  placeholderCard: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    marginBottom: 10,
  },
  placeholderImage: {
    width: 50,
    height: 80,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginRight: 20,
  },
  placeholderTextContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  recentsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  recentsTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  openingContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 15,
  },
  openingLabel: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  openingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 36,
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    padding: 0,
  },
  sendButton: {
    marginLeft: 8,
  },
});
