import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';

interface CircularProgressComponentProps {
  color?: string;
  maxValue?: number;
  value: number;
  radius?: number;
}

const CircularProgressComponent = (props: CircularProgressComponentProps) => {
  const {color, maxValue, value, radius} = props;
  return (
    <CircularProgress
      maxValue={maxValue ?? 100}
      value={value}
      radius={radius ?? 56}
      valueSuffix="%"
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={'#3C444A'}
      progressValueColor={colors.textColor}
      showProgressValue={true}
      activeStrokeWidth={14}
      inActiveStrokeWidth={14}
    />
  );
};

export default CircularProgressComponent;
