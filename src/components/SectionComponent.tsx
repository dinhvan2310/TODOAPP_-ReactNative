import React from 'react';
import {View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface SectionComponentProps {
  children: React.ReactNode;
  styles?: ViewStyle;
}

const SectionComponent = (props: SectionComponentProps) => {
  const {children, styles} = props;
  return <View style={[globalStyles.section, styles]}>{children}</View>;
};

export default SectionComponent;
