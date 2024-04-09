import hello_world from './functions/hello_world';

export const functionFactory = {
  // Add your functions here
  hello_world,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
