module.exports = function () {
  let array_num=[], num=0;
  
  for(let i = 1; i <= 100; i++) {
    // check if the number is a multiple of 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      num = 'fizzbuzz';
    } // check if the number is a multiple of 3
      else if(i % 3 === 0) {
      num = 'fizz';
    } // check if the number is a multiple of 5
      else if(i % 5 === 0) {
       num = 'buzz';
    } else {
      num = i
    }
    console.log(num);
    array_num.push(num);
  }

  return array_num;
}