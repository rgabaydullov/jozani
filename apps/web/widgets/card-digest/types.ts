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

export enum Category {
  Animal = 'Animal',
  Business = 'Business',
  Folks = 'Folks',
  Giving = 'Giving',
  Health = 'Health',
  Housing = 'Housing',
  Learn = 'Learn',
  Nature = 'Nature',
  Nutrition = 'Nutrition',
  Pray = 'Pray',
  Promise = 'Promise',
  Rest = 'Rest',
  Sport = 'Sport',
}

export interface ICardDigestProps extends ICardProps {
  type: string;
  title: string;
  bgColors?: unknown;
}
