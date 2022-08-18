export function customReduce(data, func, startValue) {
  let nextValue = startValue || null;

  data.forEach((element) => {
    nextValue = func(nextValue, element);
  });

  return nextValue;
}
