import { Slider as MuiSlider } from '@mui/material';
import React from 'react';
import { ISliderProps } from './types';

const Slider: React.FC<ISliderProps> = (props) => {
  return (
    <MuiSlider {...props} />
  );
};

export default React.memo(Slider);
