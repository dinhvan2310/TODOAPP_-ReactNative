import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface CardComponentProps {
  children?: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

const CardComponent = (props: CardComponentProps) => {
  const {children, customStyles} = props;
  return (
    <View style={[globalStyles.inputContainer, styles.card, customStyles]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
});

export default CardComponent;
