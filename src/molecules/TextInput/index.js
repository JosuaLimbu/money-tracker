import React from 'react'
import { TextInput as CustomTextInput, Text, StyleSheet, View } from 'react-native'

const TextInput = ({label, placeholder, value, onChangeText}) => {
  return (
    <View>
      <Text style={styles.textInput}>{title}</Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}

        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
    textInput: {
      fontSize: 16,
      marginBottom: 6,
      fontFamily: 'Poppins-Regular'
    },
    input: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#020202',
      padding: 10,
      paddingHorizontal: 10
    }
    
  });
  
export default TextInput
