import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Match 1'
}, {
  id: '2',
  name: 'Match 2'
}, {
  id: '3',
  name: 'Match 3'
}, {
  id: '4',
  name: 'Match 4'
}, {
  id: '5',
  name: 'Match 5'
}];

const ProfileScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>Profile Name</Text>
      </View>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.matchContainer}>
            <Text style={styles.matchName}>{item.name}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileContainer: {
    alignItems: 'center',
    margin: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  matchContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  matchName: {
    fontSize: 16
  }
});
export default ProfileScreen;