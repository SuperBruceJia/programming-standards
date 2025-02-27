export * from './build';
export * from './languages';

export interface Rule {
  name: string;
  value: any;
  description: string;
  reason?: string;
  comments: string;
  badExample?: string;
  goodExample?: string;
  [key: string]: string | boolean | undefined;
}
