import React from 'react';
import {Text, StyleSheet} from 'react-native';

type TitleProps = {
  title: string;
};

const Title = ({title}: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    fontSize: 24,
  },
});

export default Title;
