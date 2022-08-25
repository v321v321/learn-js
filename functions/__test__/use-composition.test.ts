import { expect, test } from 'vitest';
import {
  compose,
  calculateGasolineDieselDiff,
} from '../examples/use-composition';
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

// Написать функцию, которая вычисляет насколько
// количество всех машин с типом топлива Gasoline
// больше количества машин с типом топлива Diesel

// Для решения нужно использовать функцию compose, которая
// принимает две функции: для фильтрации и для рассчета количества
// const calculateGasolineDieselDiff = {
//   const gasolineCount = compose(filterFunc('Gasoline'), countFunc)(cardData);
//   const dieselCount = compose(filterFunc('Diesel'), countFunc)(cardData);
//   return gasolineCount - dieselCount;
// }
test('Test gasoline/disel count diff', () => {
  expect(calculateGasolineDieselDiff(carsData)).toMatchSnapshot();
});
