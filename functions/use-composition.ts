import { Car } from "./__test__/cars-data";

// Написать функцию compose, которая принимает на вход массив
// функций и возвращает скомпозированную функцию. Скомпозированная
// функция принимает на вход любой аргумент и по очереди передает данные
// в поток функций

//filter и кол-во
/*
function compose(handlers) {
  return function(data) {
    //func(func(func(data)))

    let result = data
    
    handlers.reduce((result, function) => {
      return {
      }
    })
      //item(item(data))
  })

  }
*/

// Написать функцию, которая вычисляет насколько
// количество всех машин с типом топлива Gasoline
// больше количества машин с типом топлива Diesel

export function calculateGasolineDieselDiff(cars: Car[]) {
  const carsD = cars.filter(item => item.fuel == 'Diesel').length
  const carsG = cars.filter(item => item.fuel == 'Gasoline').length
  
  return carsG - carsD
}

