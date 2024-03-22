import React from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';

interface TitleComponentProps {
  title: string;
  color?: string;
  size?: number;
  fontFamily?: string;
}

const TitleComponent = (props: TitleComponentProps) => {
  const {title, color, size, fontFamily} = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          fontSize: size ?? 20,
          color: color ?? colors.textColor,
          fontFamily: fontFamily ?? fontFamilies.PoppinsSemiBold,
        },
      ]}>
      {title}
    </Text>
  );
};

export default TitleComponent;
