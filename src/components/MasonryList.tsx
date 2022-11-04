import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CardBird from './CardBird';
import Title from './ui/Title';
import {Bird} from '../lib/types';

type MasonryListProps = {
  data: Bird[];
  titleText: string;
};

const MasonryList = ({data, titleText}: MasonryListProps) => {
  return (
    <View style={styles.container}>
      <Title title={titleText} />
      <FlatList
        columnWrapperStyle={styles.spaceBetween}
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <CardBird
              id={item.id}
              name={item.name}
              variant="dark"
              img={item.image}
              isMasonry
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
    flex: 1,
    marginBottom: -34,
  },

  spaceCardMasonry: {
    width: '4%',
    backgroundColor: 'transparent',
  },
  spaceBetween: {justifyContent: 'space-between'},
});

export default MasonryList;
