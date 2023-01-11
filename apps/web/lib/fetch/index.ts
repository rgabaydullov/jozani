import { Fetch } from '@jozani/domains';
import {
  BASE_HOST,
  CLIENTS_HOST,
  EVENT_TRACKER_AUTH_TOKEN,
  EVENT_TRACKER_HOST,
  RECORDS_HOST,
} from '../../shared/constants';

const fetch = new Fetch({
  baseURL: BASE_HOST,
});

export const fetchClients = new Fetch({
  baseURL: CLIENTS_HOST,
});

export const fetchRecords = new Fetch({
  baseURL: RECORDS_HOST,
})

export const fetchEventTracker = new Fetch({
  baseURL: EVENT_TRACKER_HOST,
  headers: {
    'authorization': `Basic ${EVENT_TRACKER_AUTH_TOKEN}`,
  },
  withCredentials: false,
});

export default fetch;
