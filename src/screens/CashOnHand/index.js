import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Header2 from '../../components/molecules/Header2';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/molecules/TextInput';
import Transaction from '../../components/molecules/Transaction';
import Gap from '../../components/atoms/Gap';

const CashOnHand = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header2 title="Cash On Hand" navigation={navigation} />
      <Gap height={16}/>
      <TextInput 
        label="Description" 
        placeHolder="Add the description" />
      <TextInput 
        label="Type" 
        placeHolder="Debit / Credit" />
      <Button 
        label="Save" 
        backgroundColor="#02CF8E" 
        textColor="#020202" />
      <Gap height={16}/>
      <Text style={styles.text}>Last 3 Transactions</Text>
      <Transaction
        date="17 April 2020"
        description="Water, Food"
        balance="-Rp. 300.000"
      />
      <Transaction
        date="18 April 2020"
        description="Office supplies"
        balance="-Rp. 300.000"
      />
      <Transaction
        date="19 April 2020"
        description="Top"
        balance="+Rp. 300.000"
      />
    </ScrollView>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 16,
    marginLeft: 28,
    marginRight: 28,
    marginTop: 28,
    marginBottom: 10
  },
});