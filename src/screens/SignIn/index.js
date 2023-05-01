import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Header from '../../molecules/Header';
import TextInput from '../../molecules/TextInput';


const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          title="Email Address"
          placeholder='Type your email address'
        />
        <Gap height={16}/>
        <TextInput 
          title="Password" 
          placeholder='Type your password' />
        <Gap height={12}/>
        <Button label="Create New Account" color="#8D92A3" textColor='white'/>
      </View>
      
    </View>
  )
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
  }
});