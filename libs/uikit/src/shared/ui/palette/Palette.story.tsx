import { ComponentMeta } from '@storybook/react';
import Palette from '.';

export default {
  title: 'Palette',
  component: Palette,
} as ComponentMeta<typeof Palette>;

export const Basic = () => <Palette />;
