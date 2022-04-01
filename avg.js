const stat = require('./index');
sumStat= stat.reduce((x, y) => x + y);
console.log(`sum of array = ${sumStat}`);

const avg = (() => {
    let average = sumStat/stat.length;
    console.log(`Average = ${average}`);
});
avg();

module.exports = avg;