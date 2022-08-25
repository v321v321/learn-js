import { expect, test } from 'vitest';
import { customMap, customFilter } from '../use-arrow-func';
import { Car, carsData } from './cars-data';

// Написать функцию map, которая принимает на вход массив
// и стрелочную функцию, которая обрабатывает элементы массива
test('Test custom map function', () => {
  expect(
    customMap(carsData, (car: Car) => ({
      ...car,
      model: car.model.toLocaleLowerCase(),
    }))
  ).toMatchSnapshot();
});


// Написать функцию filter, которая принимает на вход массив
// и стрелочную функцию для фильтрации массива
test('Test custom filter function', () => {
  console.log(carsData)
  
  expect(
    customFilter(carsData, (car: Car) => car.fuel === 'Diesel')
  ).toMatchSnapshot();

  console.log(customFilter(carsData, (car: Car) => car.fuel === 'Diesel'))
});



