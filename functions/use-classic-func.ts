

// [3, 5, 8]
// 0 + 3 = 3
// 3 + 5 = 8
// 8 + 8 = 16
// Написать не стрелочную функцию, которая реализует reduce
export function customReduce(arr, func, initValue) {

  //let result = initValue

  return arr.reduce(func, initValue)

 
}