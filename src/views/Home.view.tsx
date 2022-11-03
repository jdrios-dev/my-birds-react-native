import React from 'react';
import {View, StyleSheet} from 'react-native';
import NextToFind from '../components/NextToFind';
import PopularBirds from '../components/PopularBirds';
import TextInputMB from '../components/ui/TextInput';

export const HomeView = () => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = React.useState(initialText);

  return (
    <View style={styles.container}>
      <TextInputMB
        inputAccessoryViewID={inputAccessoryViewID}
        onChange={setText}
        value={text}
        placeholder="Search…"
      />
      <PopularBirds />
      <NextToFind />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
