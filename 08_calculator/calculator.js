const add = (a,b) => a+b

const subtract = (a,b) => a-b

const sum = function(arr) {
  var total = 0;
  for(let i =0;i<arr.length;i++){
    total+=arr[i]
  }
  return total;
};

const multiply = function(arr) {
  var volume = 1;
  for(let i =0;i<arr.length;i++){
    volume*=arr[i]
  }
  return volume;
};

const power = function(a,b) {
  var volume = 1;
  for(let i=0;i<b;i++){
    volume*=a;
  }
  return volume;
};

const factorial = function(a) {
  if(a===0) return 1;
  else return a * factorial(a-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
