const { readFile } = require('fs');

readFile('input.txt', 'utf-8', (err, dataBuffer) => {
  if (err) throw err;

  const checkSums = { 2: 0, 3: 0 };

  dataBuffer
    .toString()
    .split('\n')
    .forEach(currentWord => {
      const wordHash = {};
      let addTwo = false;
      let addThree = false;
      currentWord
      .split('')
      .forEach(letter => {
        if (!wordHash[letter]) {
          wordHash[letter] = 0;
        }
        wordHash[letter]++;
      });
      for (letter in wordHash) {
        if (wordHash[letter] === 2) {
          addTwo = true;
        }
        if (wordHash[letter] === 3) {
          addThree = true;
        }
      }
      if (addTwo) checkSums[2]++;
      if (addThree) checkSums[3]++;
    });

    const checkSum = checkSums[2] * checkSums[3];
    console.log(checkSum);
});
