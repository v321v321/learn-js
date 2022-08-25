import { CarFuelType, Car } from '../__test__/cars-data';

export const compose =
  (...funcs) =>
  (startValue) =>
    funcs.reduce((result, func) => func(result), startValue);

const fitlerCardByType = (fuelType: CarFuelType) => (cars: Car[]) => {};

export const calculateGasolineDieselDiff = (carsData) => {};
