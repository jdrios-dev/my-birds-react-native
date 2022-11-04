import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import TextInputMB from '../components/ui/TextInput';
import MasonryList from '../components/MasonryList';
import {foundedBirds} from '../lib/data';

export const CollectionView = () => {
  const inputAccessoryViewID = 'home-input-text-id';
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
      <MasonryList data={foundedBirds} titleText="Your birds" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
