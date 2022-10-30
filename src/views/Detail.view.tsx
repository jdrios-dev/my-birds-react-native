import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {data} from '../lib/data';
import {Bird} from '../lib/types';
import Title from '../components/Title';
import {colors} from '../lib/theme';

type ParamType = {
  Detail: {
    id: string;
  };
};

export const DetailView = () => {
  const {params} = useRoute<RouteProp<ParamType, 'Detail'>>();
  const {id} = params;

  const bird = data.find(item => item.id === id) as Bird;

  console.log('IMAGE', bird.image);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {bird.image ? (
          <Image
            style={styles.image}
            source={{
              uri: bird.image as string,
            }}
          />
        ) : (
          <Image
            style={styles.imagePlaceholder}
            source={require('../assets/bird_placeholder.png')}
          />
        )}
      </View>
      <Title title={bird.name} />
      <Text style={styles.subTitle}>{bird.name}</Text>
      <Text style={styles.description}>{bird.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: 'auto',
    height: 180,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: colors.bgLigth,
    marginBottom: 16,
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 22,
    color: colors.secondDark,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    color: colors.secondDark,
    lineHeight: 30,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  imagePlaceholder: {
    alignSelf: 'center',
  },
});
