import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Line from '../../atoms/Line';

const Balance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Balance</Text>
      <Text style={styles.balanceTotal}>Rp. 10.000.000</Text>
      <Line />
      <View style={styles.container2}>
        <View>
          <Text style={styles.labelBalance}>Cash On Hand</Text>
          <Text style={styles.labelBalance}>Cash On Bank</Text>
        </View>
        <View>
          <Text style={styles.debit}>Rp. 4.000.000</Text>
          <Text style={styles.debit}>Rp. 6.000.000</Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  balanceTotal: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 14,
  },
  container2: {
    flexDirection: 'row',
    columnGap: 10,
  },
  labelBalance: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  debit: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});