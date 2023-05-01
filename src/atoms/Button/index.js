import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress, color = '#02CF85', textColor = '#fff' }) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      <Text style={styles.buttonText(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: color => ({
    width: '100%',
    height: 45,
    backgroundColor: color,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }),
  buttonText: textColor => ({
    color: textColor,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
});

export default Button;
