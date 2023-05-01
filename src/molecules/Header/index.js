import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: '100%',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 37,
    paddingBottom: 38,
    paddingLeft: 24,
  },
});