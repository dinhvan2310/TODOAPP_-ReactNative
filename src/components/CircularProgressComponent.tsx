import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';

interface CircularProgressComponentProps {
  color?: string;
  maxValue?: number;
  value: number;
}

const CircularProgressComponent = (props: CircularProgressComponentProps) => {
  const {color, maxValue, value} = props;
  return (
    <CircularProgress
      maxValue={maxValue ?? 100}
      value={value}
      valueSuffix="%"
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={'#3C444A'}
      progressValueColor={colors.textColor}
      showProgressValue={true}
    />
  );
};

export default CircularProgressComponent;
