import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Profile from '../../../assets/images/cancel_24px_outlined.png'

const Error = () => {
  return (
    <View style={styles.container}>
      <Text>Email sudah terdaftar pada aplikasi</Text>
      <Image source={{Profile}}/>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    height: 50
  },
});