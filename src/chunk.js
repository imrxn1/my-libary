// Split an array into chunks of a given size

function chunk(arr, size) {
  const result = [];

  if (
    arguments.length === 2 &&
    Array.isArray(arr) &&
    size > 0 &&
    Number.isInteger(size) &&
    (arr.length === 0 || arr.length >= size)
  ) {
    let innerArr = [];

    for (let i = 0; i < arr.length; i++) {
      innerArr.push(arr[i]);

      if (innerArr.length === size) {
        result.push(innerArr);

        innerArr = [];
      }
    }

    if (innerArr.length !== 0) {
      result.push(innerArr);
    }
  } else {
    throw new Error(
      "chunk() requires exactly 2 arguments: an array and a size",
    );
  }

  return result;
}
