import React, {ReactNode} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import TextComponent from './TextComponent';

interface Props {
  text: string;
  icon?: ReactNode;
  onPress: () => void;
  color?: string;
  isLoading?: boolean;
}

const ButtonComponent = (props: Props) => {
  const {text, icon, onPress, color, isLoading} = props;

  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={{
        backgroundColor: color ? color : isLoading ? colors.gray2 : colors.blue,
        padding: 16,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TextComponent
          text={text}
          flex={0}
          size={16}
          textStyles={{textTransform: 'uppercase'}}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
