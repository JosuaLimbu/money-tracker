import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HeaderHome from '../../components/molecules/HeaderHome';
import Gap from '../../components/atoms/Gap';
import Balance from '../../components/molecules/Balance';
import ButtonTransaction from '../../components/molecules/AddTransaction';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderHome title="Money Tracker" subTitle="Track your money" />
      <Gap height={24}/>
      <Balance />
      <Gap height={24}/>
      <ButtonTransaction navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});