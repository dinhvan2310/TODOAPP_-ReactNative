import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponent';
import {colors} from '../constants/colors';

interface TagComponentProps {
  text: string;
  color?: string;
  tagStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const TagComponent = (props: TagComponentProps) => {
  const {text, color, tagStyle, textStyle, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={[
        globalStyles.tag,
        {backgroundColor: color ?? colors.blue},
        tagStyle,
      ]}>
      <TextComponent text={text} textStyles={textStyle} />
    </TouchableOpacity>
  );
};

export default TagComponent;
