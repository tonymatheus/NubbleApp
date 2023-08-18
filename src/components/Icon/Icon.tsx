import React from 'react';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';

interface Props {
  name: IconName;
}

export const Icon = ({name}: Props) => {
  const SVGIcon = iconRegistry[name];
  return <SVGIcon />;
};

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
