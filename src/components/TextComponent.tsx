import React from 'react';
import {Text} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';
import {globalStyles} from '../styles/globalStyles';

interface TextComponentProps {
  text: string;
  size?: number;
  color?: string;
  fontFamily?: string;
  flex?: number;
}

const TextComponent = (props: TextComponentProps) => {
  const {text, size, color, fontFamily, flex} = props;

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
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
