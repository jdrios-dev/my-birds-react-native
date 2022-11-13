import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {data} from '../lib/data';
import Title from '../components/ui/Title';
import {colors} from '../lib/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Map from '../components/Map';
import Button from '../components/ui/Button';

import NewBirdModal from '../components/modals/NewBirdModal';
import {Bird} from '../lib/types';

type ParamType = {
  Detail: {
    id: string;
  };
};

export const DetailView = () => {
  const {params} = useRoute<RouteProp<ParamType, 'Detail'>>();
  const {id} = params;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [coord, setCoord] = useState([0, 0]);
  const [imageLoaded, setImageLoaded] = useState<string>('');
  const handleModal = () => {
    setModalVisible(prev => !prev);
  };
  let bird = data.find(item => item.id === id) as Bird;

  if (!id) {
    <View>
      <Text>Please, select a birds first</Text>
    </View>;
  }

  if (imageLoaded) {
    const newBird = {
      ...bird,
      coordinates: coord,
      image: imageLoaded,
      isDiscoverd: true,
    };
    bird = newBird;
  }

  return (
    <View style={styles.container}>
      <NewBirdModal
        bird={bird}
        visible={modalVisible}
        handleModal={handleModal}
        setImage={setImageLoaded}
        setCoord={setCoord}
        coord={coord}
      />
      <View style={styles.imageContainer}>
        {bird.image || imageLoaded ? (
          <Image
            style={styles.image}
            source={{
              uri: (bird.image as string) || (imageLoaded! as string),
            }}
          />
        ) : (
          <Image
            style={styles.imagePlaceholder}
            source={require('../assets/bird_placeholder.png')}
          />
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View>
            <Title title={bird.name} />
            <Text style={styles.subTitle}>{bird.name}</Text>
          </View>
          <Icon
            name="feather-alt"
            style={bird.isDiscoverd ? styles.icon : styles.greyIcon}
          />
        </View>
        <Text style={styles.description}>{bird.description}</Text>
        {bird.isDiscoverd ? (
          <View>
            <Map
              coordinates={bird.coordinates}
              isDiscoverd={bird.isDiscoverd}
            />
          </View>
        ) : (
          <View>
            <Button text="Found this bird!?" onPress={handleModal} />
            <Text style={[styles.description, styles.smallDescription]}>
              You can add images and location when you find this bird, go for
              it!
            </Text>
          </View>
        )}
      </ScrollView>
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
    height: 220,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: colors.bgLigth,
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
    marginBottom: 16,
  },
  smallDescription: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    color: colors.thirdDark,
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
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  icon: {color: colors.secondary, fontSize: 60},
  greyIcon: {color: colors.thirdDark, fontSize: 60},
});
