import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../lib/theme';

type ButtonProps = {
  text: string;
  onPress: () => void;
  isSecondary?: boolean;
};

const ButtonMB = ({text, onPress, isSecondary}: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.button, isSecondary ? styles.buttonSecondary : null]}
        onPress={onPress}>
        <Text style={[styles.text, isSecondary ? styles.textSecondary : null]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    borderRadius: 50,
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  buttonSecondary: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  textSecondary: {
    color: colors.secondary,
  },
});

export default ButtonMB;
