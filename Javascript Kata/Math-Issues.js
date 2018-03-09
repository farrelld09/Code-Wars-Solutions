// Oh no, our Math object was "accidently" reset. Can you re-implement some
// of those functions? We can assure, that only non-negative numbers are
// passed as arguments. So you don't have to consider things like undefined,
// null, NaN, negative numbers, strings and so on.
//
// Here is a list of functions, we need:
//
// Math.round()
// Math.ceil()
// Math.floor()


Math.round = function(number) {
  var num = parseInt(number.toString().split('.')[0]);
  var num2 = num + 1;
  var rem = number - num;

  return num2 - number > rem ? num : num2;
};

Math.ceil = function(number) {
  var num = parseInt(number.toString().split('.')[0]);
  var num2 = num + 1;

  return num / number < 1 ? num2 : num;
};

Math.floor = function(number) {
  return parseInt(number.toString().split('.')[0]);
};
