function squareSum(numbers){
  if (numbers.length == 0) { return 0};
  return numbers.map(x => x *= x).reduce ((a, b) => a + b);
}