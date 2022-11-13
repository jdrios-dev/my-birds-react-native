import {View, Modal, Alert, StyleSheet} from 'react-native';
import React from 'react';
import Title from '../ui/Title';
import Button from '../ui/Button';
import Map from '../Map';
import {Bird} from '../../lib/types';
import Spacer from '../ui/Spacer';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

type NewBirdModalProps = {
  bird: Bird;
  visible: boolean;
  handleModal: () => void;
  setImage: (uriImage: string) => void;
  setCoord: (coord: number[]) => void;
  coord: number[];
};

const NewBirdModal = ({
  bird,
  visible,
  handleModal,
  setImage,
  setCoord,
  coord,
}: NewBirdModalProps) => {
  const selectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response: ImagePickerResponse) => {
        const uriImage = response?.assets?.[0].uri;
        if (uriImage) {
          setImage(uriImage);
        }
      },
    );
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          handleModal();
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Title title="Where did you find it?" />
            <Map
              coordinates={bird.isDiscoverd ? bird.coordinates : coord}
              isDiscoverd={bird.isDiscoverd}
              setCoord={setCoord}
            />
            <Title title="Pick the best photo" />
            <Button text="Add an image" onPress={selectImage} isSecondary />
            <Spacer variant="md" />
            <Button text="Save / Close" onPress={handleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    marginTop: 'auto',
    padding: 16,
    backgroundColor: 'white',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
});

export default NewBirdModal;
