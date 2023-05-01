import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header2 from '../../components/molecules/Header2';
import Gap from '../../components/atoms/Gap';
import Photo from '../../components/molecules/AddPhoto';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Error from '../../components/molecules/Error';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header2 title="Sign Up" navigation={navigation} />
      <Gap height={24}/>
      <Photo />
      <TextInput 
        title="Full Name" 
        placeHolder="Type your full name" 
        />
      <TextInput 
        title="Email Address" 
        placeHolder="Type your email address" 
        />
      <TextInput 
        title="Password" 
        placeHolder="Type your password" 
        />
      <Button 
        title="continue" 
        color="#02CF8E" 
        textColor="#020202" 
        />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});