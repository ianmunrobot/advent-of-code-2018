const { readFile } = require('fs');

readFile('input.txt', 'utf-8', (err, dataBuffer) => {
  if (err) throw err;

  const identifiers = dataBuffer
    .toString()
    .split('\n')
    .sort();
  
  for (let i = 1; i < identifiers.length; i++) {
    const first = identifiers[i - 1];
    const second = identifiers[i];

    let diff = 0;
    let sharedLetters;
    for (let letterIndex = 0; letterIndex < first.length; letterIndex++) {
      if (first[letterIndex] !== second[letterIndex]) {
        diff++;
        sharedLetters = first.substr(0, letterIndex) + first.substr(letterIndex + 1);
        if (diff > 1) break;
      }
    }
    if (diff === 1) {
      console.log(sharedLetters);
    }
  }
});
