const { readFile } = require('fs');

readFile('input.txt', 'utf-8', (err, dataBuffer) => {
  if (err) throw err;

  const fabric = {};

  const input = dataBuffer
    .toString()
    .split('\n');

  let total = 0;

  input.forEach(claim => {
    const captures = claim.match(/#(\d*)\s@\s(\d*),(\d*):\s(\d*)x(\d*)/).map(Number);
    const [_, id, startLeft, startTop, width, height] = captures;

    for (let y = startTop; y < startTop + height; y++) {
      if (!fabric[y]) {
        fabric[y] = {};
      }
      for (let x = startLeft; x < startLeft + width; x++) {
        if (fabric[y][x] === 1) {
          total++;
          fabric[y][x] = 'counted'
        } else if (fabric[y][x] === 'counted'){
          continue;
        } else {
          fabric[y][x] = 1;
        }

      }
    }
  });
  console.log(total);
});
