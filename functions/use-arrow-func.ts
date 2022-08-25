// Написать функцию map, которая принимает на вход массив
// и стрелочную функцию, которая обрабатывает элементы массива

export const customMap = (arr, func) => {

  const arr2 = []

  arr.forEach(item => {

    arr2.push(func(item))

  })

  return arr2
}

// Написать функцию filter, которая принимает на вход массив
// и стрелочную функцию для фильтрации массива

export const customFilter = (arr, func) => {

  const arr2 = []

  arr.forEach(item => {

    if (func(item)) {
      arr2.push(item)
    }
  })

  return arr2
}

