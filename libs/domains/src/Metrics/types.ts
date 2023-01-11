/* eslint-disable @typescript-eslint/naming-convention */
export interface IEvent {
  event: string;
  payload: object;
}

export interface IMetric extends IEvent {
  user_id?: string;
  date_time?: string;
}
