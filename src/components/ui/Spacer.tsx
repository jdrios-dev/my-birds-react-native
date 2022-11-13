import {View} from 'react-native';
import React from 'react';

type SpacerProps = {
  variant: 'xs' | 'sm' | 'md' | 'xl';
};

const Spacer = ({variant}: SpacerProps) => {
  const space = () => {
    switch (variant) {
      case 'xs':
        return 8;
      case 'sm':
        return 16;
      case 'md':
        return 24;
      case 'xl':
        return 32;
    }
  };

  return <View style={{marginBottom: space()}} />;
};

export default Spacer;
