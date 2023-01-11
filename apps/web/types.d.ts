/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
export type StrictMap<TMap extends any, IProperty = string> = {
  [P in keyof TMap]: IProperty;
};
