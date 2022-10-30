import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeView} from '../views/Home.view';
import {CollectionView} from '../views/Collection.view';
import {DetailView} from '../views/Detail.view';
import {ProfileView} from '../views/Profile.view';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Detail" component={DetailView} />
      <Tab.Screen name="Collection" component={CollectionView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
}

export default Tabs;
