import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../lib/theme';

type ButtonProps = {
  text: string;
  onPress: () => void;
};

const ButtonMB = ({text, onPress}: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
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
});

export default ButtonMB;
