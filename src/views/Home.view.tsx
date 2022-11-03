import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NextToFind from '../components/NextToFind';
import PopularBirds from '../components/PopularBirds';
import TextInputMB from '../components/ui/TextInput';

export const HomeView = () => {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = React.useState(initialText);

  return (
    <SafeAreaView style={styles.container}>
      <TextInputMB
        inputAccessoryViewID={inputAccessoryViewID}
        onChange={setText}
        value={text}
        placeholder="Search…"
      />
      <PopularBirds />
      <NextToFind />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
