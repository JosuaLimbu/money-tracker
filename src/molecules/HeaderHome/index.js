import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Profil from '../../assets/img/image.png'
const HomeHeader = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Image
        source={Profil}
        style={styles.image}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingTop: 37,
    paddingRight: 24,
    paddingBottom: 38
  },
  image: {
    borderRadius: 10
  },

  title: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'Poppins-Medium'
  },
  subTitle: {
    fontSize: 14,
    color: '#8D92A3',
    fontFamily: 'Poppins-Light'
  }
});