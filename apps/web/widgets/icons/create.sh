#!/bin/bash

# Directory from the root of the script execution
ROOT=./widgets/icons/shared

cat > $ROOT/$1.tsx << EOF
import React from 'react';
import { getCssVar } from '@jozani/uikit';
import { IIconProps } from '../types';

const $1: React.FC<IIconProps> = ({
  fill = getCssVar('white', 100),
  width = 64,
  height = 64,
  ...props
}) => (
  <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
    >
      <path
        fill={fill}
      />
    </svg>
);

export default React.memo($1);
EOF
