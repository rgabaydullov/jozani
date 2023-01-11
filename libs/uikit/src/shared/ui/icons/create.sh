#!/bin/bash

ROOT=./libs/uikit/src/shared/ui/icons/shared

cat > $ROOT/$1.tsx << EOF
import React from 'react';

import { IIconProps } from '../types';

const $1: React.FC<IIconProps> = ({ fill = 'white', ...props }) => (

);

export default React.memo($1);
EOF
