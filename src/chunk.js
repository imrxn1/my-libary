// Split an array into chunks of a given size

function chunk(arr, size) {
  const result = [];
  if (arguments.length !== 2) {
    throw new Error(
      `chunk() requires exactly 2 arguments: an array and a size`,
    );
  }

  if (!Array.isArray(arr)) {
    throw new Error(`chunk() first argument must be an array`);
  }

  if (!Number.isInteger(size) || size <= 0) {
    throw new Error(`chunk() second argument must be a positive integer`);
  }

  if (arr.length !== 0 && size > arr.length) {
    throw new Error(`chunk() size cannot be greater than the array length`);
  }

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

  return result;
}

