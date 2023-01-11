#!/bin/bash

ROOT=./src/components/icons

cat > $ROOT/$1.tsx << EOF
import React from 'react';
import { getCssVar } from '../../../../lib';
import { IImageProps } from '../types';

const $1: React.FC<IImageProps> = ({ fill = getCssVar('grey', 100), ...props }) => (

);

export default React.memo($1);
EOF
