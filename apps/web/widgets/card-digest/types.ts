import { ICardProps } from '@jozani/uikit';

export enum Digest {
  Main = 'main',
  Apricot = 'apricot',
  Lavande = 'lavande',
  Marine = 'marine',
  Orange = 'orange',
  Nuclear = 'nuclear',
  Peach = 'peach',
  Rose = 'rose',
  Sky = 'sky',
  Violet = 'violet',
}

export interface ICardDigestProps extends ICardProps {
  type: string;
  title: string;
  bgColors?: unknown;
}
