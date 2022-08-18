import { expect, test } from 'vitest';
import { customReduce } from '../examples/use-classic-func';
import { Car, carsData } from './cars-data';

// Написать не стрелочную функцию, которая реализует reduce
test('Test custom reduce function', () => {
  expect(
    customReduce(
      carsData,
      (result, _) => {
        return result + 1;
      },
      0
    )
  ).toMatchSnapshot();
});
