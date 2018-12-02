const { readFile } = require('fs');

readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  
  const frequencyArray = data
  .toString()
  .split('\n');

  const freqs = { 0: true };
  let repeatedFrequency = '';
  let currentFrequency = 0;

  let index = 0;

  while (repeatedFrequency === '') {
    currentFrequency += parseInt(frequencyArray[index]);
    if (freqs[currentFrequency]) {
      repeatedFrequency = currentFrequency;
    } else {
      freqs[currentFrequency] = true;
    }
    index = (index + 1) % frequencyArray.length;
  }

  console.log(repeatedFrequency)
});