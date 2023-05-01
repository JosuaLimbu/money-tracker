import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import IconHome from '../../assets/icons/ic_home.svg';

const Tab = createBottomTabNavigator();
const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name=" "
        component={IconHome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return <HomeIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTab;