function positiveSum(arr) {
  let positives = arr.filter(x => x > 0);
  let sum = 0;
  for (let i = 0; i < positives.length; i++) {
    sum += positives[i];
  }
  return sum;
}