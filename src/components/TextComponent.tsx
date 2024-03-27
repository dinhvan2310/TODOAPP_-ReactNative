import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyles';

interface TextComponentProps {
  text: string;
  size?: number;
  color?: string;
  fontFamily?: string;
  flex?: number;
  textStyles?: StyleProp<TextStyle>;
}

const TextComponent = (props: TextComponentProps) => {
  const {text, size, color, fontFamily, flex, textStyles} = props;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          flex: flex ?? 1,
          fontSize: size ?? 14,
          color: color ?? colors.decsColor,
          fontFamily: fontFamily ?? fontFamilies.PoppinsRegular,
        },
        textStyles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
