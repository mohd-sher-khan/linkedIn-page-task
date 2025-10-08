import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.topBar}>
        <View style={styles.userSection}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/5e/3e/70/5e3e70456355a9c69b8145cc11f0bc8f.jpg',
            }}
            style={styles.userPic}
          />
          <View style={styles.searchField}>
            <Text style={styles.placeholder}>Search...</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.msgBtn}>
          <Text style={styles.msgIcon}>💬</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.likeInfo}>
        <Text style={styles.likeText}>Mohd Sher Khan liked this</Text>
      </View>

      <ScrollView contentContainerStyle={styles.feed}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/5e/3e/70/5e3e70456355a9c69b8145cc11f0bc8f.jpg',
              }}
              style={styles.profilePic}
            />
            <View style={styles.userMeta}>
              <Text style={styles.userName}>Sher Khan</Text>
              <Text style={styles.userRole}>VP - Growth</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.caption}>
            Looking good bro! Nice shirt and design – edited perfectly 😎
          </Text>

          <Image
            style={styles.postImage}
            source={{
              uri: 'https://i.pinimg.com/736x/5e/3e/70/5e3e70456355a9c69b8145cc11f0bc8f.jpg',
            }}
          />

          <View style={styles.actionRow}>
            <TouchableOpacity>
              <Text>👍 Like</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>💬 Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>↪️ Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  userSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPic: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 8,
  },
  searchField: {
    flex: 1,
    height: 38,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  placeholder: {
    color: '#999',
    fontSize: 14,
  },
  msgBtn: {
    marginLeft: 10,
  },
  msgIcon: {
    fontSize: 18,
  },
  likeInfo: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  likeText: {
    fontSize: 13,
    color: '#666',
  },
  feed: {
    padding: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    marginBottom: 12,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  userMeta: {
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
  },
  userRole: {
    fontSize: 12,
    color: '#777',
  },
  followButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#e9f3ff',
    borderRadius: 6,
  },
  followText: {
    color: '#1868d8',
    fontWeight: '600',
    fontSize: 13,
  },
  caption: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    fontSize: 15,
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 480,
    backgroundColor: '#f2f2f2',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});
