import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

import {ArrowBack} from '../../../assets/icons';


const Header2 = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBack />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 108,
    width: '100%',
    paddingBottom: 38,
    paddingTop: 37,
    paddingLeft: 24,
    columnGap: 32,
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});