/* eslint-disable @typescript-eslint/naming-convention */
import Fetch from '../Fetch';
import { IEvent } from './types';
import { upgradeEvents } from './utils';

class Metrics {
  _userId?: string;

  constructor(
    public fetch: Fetch,
  ) {}

  get userId() {
    return this._userId || '';
  }

  set userId(userId: string) {
    this._userId = userId;
  }

  getPlatform = () => ({
    type: 'Web',
    version: 'local',
    description: '',
  });

  sendEvent = (event: string, payload: object) => {
    if (!this.userId) {
      return;
    }

    this.fetch.post('/v1/events', {
      events: upgradeEvents([{ event, payload }], this.userId),
      platform: this.getPlatform(),
    });
  }

  sendEvents = (events: IEvent[]) => {
    if (!this.userId) {
      return;
    }

    this.fetch.post('/v1/events', {
      events: upgradeEvents(events, this.userId),
      platform: this.getPlatform(),
    })
  };
}

export default Metrics;
