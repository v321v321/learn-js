export type CarFuelType = 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric';

export interface Car {
  model: string;
  color: string;
  fuel: CarFuelType;
}

export const carsData: Car[] = [
  {
    model: 'Ferrari Cruze',
    color: 'orchid',
    fuel: 'Gasoline',
  },

  {
    model: 'Kia Challenger',
    color: 'fuchsia',
    fuel: 'Gasoline',
  },

  {
    model: 'Nissan Model X',
    color: 'gold',
    fuel: 'Diesel',
  },

  {
    model: 'Bentley Model S',
    color: 'purple',
    fuel: 'Hybrid',
  },

  {
    model: 'Land Rover CTS',
    color: 'ivory',
    fuel: 'Hybrid',
  },

  {
    model: 'Hyundai Civic',
    color: 'white',
    fuel: 'Hybrid',
  },

  {
    model: 'Honda Fortwo',
    color: 'mint green',
    fuel: 'Gasoline',
  },

  {
    model: 'Mazda Escalade',
    color: 'green',
    fuel: 'Gasoline',
  },

  {
    model: 'Lamborghini XC90',
    color: 'teal',
    fuel: 'Hybrid',
  },

  {
    model: 'Honda V90',
    color: 'lime',
    fuel: 'Hybrid',
  },

  {
    model: 'Volvo 2',
    color: 'olive',
    fuel: 'Gasoline',
  },

  {
    model: 'Jeep Beetle',
    color: 'lavender',
    fuel: 'Hybrid',
  },

  {
    model: 'Aston Martin Countach',
    color: 'tan',
    fuel: 'Gasoline',
  },

  {
    model: 'Mercedes Benz Golf',
    color: 'silver',
    fuel: 'Hybrid',
  },

  {
    model: 'Chevrolet Countach',
    color: 'teal',
    fuel: 'Diesel',
  },

  {
    model: 'Audi PT Cruiser',
    color: 'cyan',
    fuel: 'Diesel',
  },

  {
    model: 'Volkswagen PT Cruiser',
    color: 'ivory',
    fuel: 'Diesel',
  },

  {
    model: 'Ford Beetle',
    color: 'violet',
    fuel: 'Diesel',
  },

  {
    model: 'Nissan Wrangler',
    color: 'lime',
    fuel: 'Electric',
  },

  {
    model: 'Smart 2',
    color: 'sky blue',
    fuel: 'Hybrid',
  },

  {
    model: 'Maserati XTS',
    color: 'pink',
    fuel: 'Gasoline',
  },

  {
    model: 'Hyundai Impala',
    color: 'fuchsia',
    fuel: 'Diesel',
  },

  {
    model: 'Hyundai Prius',
    color: 'salmon',
    fuel: 'Hybrid',
  },

  {
    model: 'Kia XC90',
    color: 'indigo',
    fuel: 'Hybrid',
  },

  {
    model: 'Rolls Royce Civic',
    color: 'white',
    fuel: 'Gasoline',
  },

  {
    model: 'Mazda Focus',
    color: 'violet',
    fuel: 'Gasoline',
  },

  {
    model: 'Maserati Malibu',
    color: 'lavender',
    fuel: 'Hybrid',
  },

  {
    model: 'Aston Martin Model 3',
    color: 'black',
    fuel: 'Hybrid',
  },

  {
    model: 'Chrysler Civic',
    color: 'yellow',
    fuel: 'Diesel',
  },

  {
    model: 'Maserati Durango',
    color: 'orchid',
    fuel: 'Hybrid',
  },
];
