import { expect, test } from 'vitest';
import { compose } from '../examples/use-composition';
import { Car, carsData } from './cars-data';

// Написать функцию compose, которая принимает на вход массив
// функций и возвращает скомпозированную функцию. Скомпозированная
// функция принимает на вход любой аргумент и по очереди передает данные
// в поток функций

test('Test composition function', () => {
  expect(
    compose(
      (elements) => elements.filter((car: Car) => car.color === 'orchid'),
      (elements) => elements.reduce((acc, car) => acc + 1, 0)
    )(carsData)
  ).toMatchSnapshot();
});
