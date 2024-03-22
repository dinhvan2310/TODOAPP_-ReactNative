import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface PropTypes {
  children: React.ReactNode;
  title?: string;
  back?: boolean;
  right?: React.ReactNode;
}

const Container = (props: PropTypes) => {
  const {children} = props;

  return <ScrollView style={globalStyles.container}>{children}</ScrollView>;
};

export default Container;
