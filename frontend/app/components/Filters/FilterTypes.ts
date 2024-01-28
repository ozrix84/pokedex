export type ShowOptions = 'all' | 'favorites';

export type FilterValues = {
  show: ShowOptions;
  type: number;
  search: string;
};

export type FilterElementProps<T extends keyof FilterValues = keyof FilterValues> = {
  name: T;
  value?: T extends 'show' ? ShowOptions : never;
};
