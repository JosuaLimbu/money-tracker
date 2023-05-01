import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Photo = () => {
  return (
    <View style={styles.borderBulat}>
      <View style={styles.bulatan}>
        <Text style={styles.text}>Add Photo</Text>
      </View>
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  borderBulat: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8D92A3',
    marginTop: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderStyle: 'dashed',
    borderWidth: 3,
    borderRadius: 150 / 2
  },
  bulatan: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    width: 125,
    height: 125,
    borderRadius: 125 / 2,
    paddingRight: 30,
    paddingLeft: 30
  },
  text: {
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20
  },
});