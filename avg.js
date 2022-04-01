const stat = require('./index');
sumStat= stat.reduce((x, y) => x + y);
console.log(`sum of array = ${sumStat}`);

const avg = (() => {
    let n = 3500000;
    let average = sumStat/n;
    console.log(`Average = ${average}`);
});
avg();

module.exports = avg;
