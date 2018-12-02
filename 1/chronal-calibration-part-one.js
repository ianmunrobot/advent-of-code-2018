const { readFile } = require('fs');

readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  const sum = data
  .toString()
  .split('\n')
  .reduce((accum, curr) => {
    console.log(curr, accum)
    return accum + parseInt(curr)
  }, 0);

  console.log(sum)
});