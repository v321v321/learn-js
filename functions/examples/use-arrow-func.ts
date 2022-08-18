export const customMap = (data, func) => {
  const result = [];

  data.forEach((element) => {
    result.push(
      func(element, (item) => {
        func(item);
      })
    );
  });

  return result;
};

export const customFilter = (data, func) => {
  const result = [];

  data.forEach((element) => {
    if (func(element)) {
      result.push(element);
    }
  });

  return result;
};
