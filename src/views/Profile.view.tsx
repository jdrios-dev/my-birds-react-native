import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
} from 'react-native';
import Title from '../components/ui/Title';
import {colors} from '../lib/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const ProfileView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageProfileContainer}>
        <Image
          style={styles.imageProfile}
          source={require('../assets/profile.jpg')}
        />
        <Title title="Jhon Doe" />
        <Title title="jhondoe@gmail.com" />
        <Title title="+57 312 3313325" />
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.fab}>
        <Icon name="pencil-alt" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageProfile: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: colors.mainDark,
    marginBottom: 32,
  },
  imageProfileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    backgroundColor: colors.secondary,
    borderRadius: 100,
  },
});
