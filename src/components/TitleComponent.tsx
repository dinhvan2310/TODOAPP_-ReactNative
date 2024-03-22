import React from 'react';
import {StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';

interface TitleComponentProps {
  title: string;
  color?: string;
  size?: number;
  fontFamily?: string;
  flex?: number;
  textStyles?: StyleProp<ViewStyle>;
}

const TitleComponent = (props: TitleComponentProps) => {
  const {title, color, size, fontFamily, flex, textStyles} = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          flex: flex ?? 1,
          fontSize: size ?? 20,
          color: color ?? colors.textColor,
          fontFamily: fontFamily ?? fontFamilies.PoppinsSemiBold,
        },
        textStyles,
      ]}>
      {title}
    </Text>
  );
};

export default TitleComponent;
