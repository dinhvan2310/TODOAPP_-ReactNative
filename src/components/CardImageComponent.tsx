import React from 'react';
import {ImageBackground, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';
import {applyOpacityToHexColor} from '../../utils/utils';

interface CardImageComponentProps {
  children?: React.ReactNode;
  color?: string;
}

const CardImageComponent = (props: CardImageComponentProps) => {
  const {children, color} = props;
  const opacityColor = color
    ? applyOpacityToHexColor(color, 0.7)
    : applyOpacityToHexColor(colors.blue, 0.7);
  return (
    <ImageBackground
      imageStyle={{borderRadius: 12}}
      source={require('../assets/images/cardBackground.jpg')}
      style={globalStyles.cardImage}>
      <View
        style={[
          globalStyles.cardImage,
          {
            backgroundColor: opacityColor,
            borderRadius: 12,
            flex: 1,
            padding: 12,
          },
        ]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImageComponent;
