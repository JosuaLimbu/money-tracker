import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Header2 from '../../components/molecules/Header2';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';
import Transaction from '../../components/molecules/Transaction';
import Gap from '../../components/atoms/Gap';

const Transaction = ({date, text, balance}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.balance}>{balance}</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 69,
    padding: 20,

    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    borderRadius: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 7,
  },
  date: {
    fontSize: 14,
    fontFamily: 'Poppins-Reguler',
    color: '#8D92A3',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  balance: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#D9435E',
  },
});