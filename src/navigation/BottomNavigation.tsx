import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeView} from '../views/Home.view';
import {CollectionView} from '../views/Collection.view';
import {DetailView} from '../views/Detail.view';
import {ProfileView} from '../views/Profile.view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../lib/theme';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'Home';

          if (route.name === 'Home') {
            iconName = 'home';
          }
          if (route.name === 'Detail') {
            iconName = 'kiwi-bird';
          }
          if (route.name === 'Collection') {
            iconName = 'star';
          }
          if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon solid name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.thirdDark,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Detail" component={DetailView} />
      <Tab.Screen name="Collection" component={CollectionView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
}

export default Tabs;
