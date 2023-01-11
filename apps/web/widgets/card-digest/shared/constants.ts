import { green } from '@jozani/uikit';
import { StrictMap } from 'apps/web/types';
import { Category, Digest } from '../types';

export const DEFAULT_COLORS = [green[500], green[300]];

export const DIGEST_COLORS: StrictMap<typeof Digest, string[]> = {
  Main: DEFAULT_COLORS,
  Apricot: ['#FCB69F', '#F3CA92'],
  Lavande: ['#FBC2EB', '#A18CD1'],
  Marine: ['#00F2FE', '#4FACFE'],
  Orange: ['#FF8C7F', '#FF8177'],
  Nuclear: ['#38F9D7', '#43E97B'],
  Peach: ['#FAD0C4', '#FF9A9E'],
  Rose: ['#FF91FF', '#FBB9A7'],
  Sky: ['#A5C0EE', '#FBC5EC'],
  Violet: ['#764BA2', '#667EEA'],
};

export const CATEGORY_COLORS: StrictMap<typeof Category, string[]> = {
  Animal: ['#7d4707', '#f0a967'],
  Business: ['#753511', '#8f6035'],
  Folks: ['#ee4d87', '#e79bbb'],
  Giving: ['#e11b00', '#f98662'],
  Health: ['#e89e86', '#ffe0c3'],
  Housing: ['#f47703', '#fbcf35'],
  Nature: ['#51dc5f', '#03f4ac'],
  Nutrition: ['#f5963d', '#ffedad'],
  Pray: ['#63daff', '#e1fffc'],
  Promise: ['#262727', '#7c8082'],
  Rest: ['#e9b020', '#fff7ab'],
  Sport: ['#1d2e87', '#20bff4'],
  Learn: ['#c90c00', '#d37f42'],
};
