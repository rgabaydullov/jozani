import { IEvent, IMetric } from '../types';

export const upgradeEvents = (events: IEvent[], userId: string): IMetric[] => events.map((event) => ({
  user_id: userId,
  date_time: new Date().toISOString(),
  ...event,
}));
