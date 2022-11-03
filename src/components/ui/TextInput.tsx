import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../lib/theme';

type TextInputMBProps = {
  value: string;
  onChange: (value: string) => void;
  inputAccessoryViewID: string;
  placeholder: string;
};

const TextInputMB = ({
  value,
  onChange,
  inputAccessoryViewID,
  placeholder,
}: TextInputMBProps) => {
  return (
    <View style={styles.containerInputText}>
      <TextInput
        style={styles.inputText}
        inputAccessoryViewID={inputAccessoryViewID}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.secondDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInputText: {
    padding: 16,
    width: '100%',
  },
  inputText: {
    padding: 16,
    borderWidth: 2,
    borderColor: colors.mainDark,
    borderRadius: 50,
    textDecorationColor: colors.mainDark,
    fontSize: 20,
  },
});

export default TextInputMB;
