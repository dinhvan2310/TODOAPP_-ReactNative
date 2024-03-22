import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface RowComponentProps {
  children?: React.ReactNode;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: RowComponentProps) => {
  const {children, justify, onPress, styles} = props;
  const style = [
    globalStyles.row,
    {
      justifyContent: justify ?? 'center',
    },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity
      style={style}
      onPress={onPress ? () => onPress() : undefined}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={style}>{children}</View>
  );
};

export default RowComponent;
