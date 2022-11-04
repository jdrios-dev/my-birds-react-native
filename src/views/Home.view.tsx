import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MasonryList from '../components/MasonryList';
import PopularBirds from '../components/PopularBirds';
import TextInputMB from '../components/ui/TextInput';
import {data} from '../lib/data';

export const HomeView = () => {
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
      <PopularBirds />
      <MasonryList titleText="Next to discover" data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
