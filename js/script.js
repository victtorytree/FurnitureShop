function highAndLow(numbers){
    const stringArray = numbers.split(' ');
    const numbersArray = [];
    let minimum = Infinity;
    let maximum = -Infinity;
    for (let i = 0; i < stringArray.length; i++) {
      numbersArray[i] = Number(stringArray[i]);
      if(numbersArray[i] > maximum) {
        maximum = numbersArray[i];
      }
      if(numbersArray[i] < minimum) {
        minimum = numbersArray[i];
      }
    }
    return {
        max: maximum,
        min: minimum
    }
  }
  let answer = highAndLow("4 3 2 43 6 -8 9");
  console.log(`${answer.max} ${answer.min}`);