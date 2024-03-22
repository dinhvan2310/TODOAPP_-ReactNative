import React from 'react';
import {View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface SectionComponentProps {
  children: React.ReactNode;
}

const SectionComponent = (props: SectionComponentProps) => {
  const {children} = props;
  return <View style={globalStyles.section}>{children}</View>;
};

export default SectionComponent;
