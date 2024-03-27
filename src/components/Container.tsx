import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface PropTypes {
  children: React.ReactNode;
  title?: string;
  back?: boolean;
  right?: React.ReactNode;
}

const Container = (props: PropTypes) => {
  const {children} = props;

  return (
    <View
      style={[
        globalStyles.container,
        {
          flex: 1,
        },
      ]}>
      <ScrollView
        style={{
          flex: 1,
          flexGrow: 1,
        }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;
