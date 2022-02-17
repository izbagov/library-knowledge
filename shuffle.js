function shuffle(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const right = arr.length - i - 1;
    const temp = arr[right];

    arr[right] = arr[i];
    arr[i] = temp;
  }

  return arr;
}
