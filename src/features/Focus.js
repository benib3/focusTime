import React, { useState } from 'react';

import { Animated, View, Text, StyleSheet } from 'react-native';
import { colors } from '../util/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

//Animations  <Text style={styles.text}>Welcome</Text>

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: colors.white,
    padding: 20,
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button:{
    justifyContent:"center"
  },
});
