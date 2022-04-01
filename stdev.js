const avg = require('./avg');
const stat = require('./index');

const stdDev = avg();

const stVariance = (() => {
    let n = 3500000;
    let v = stat.reduce((x, y) => x + y);
    
    let sqrv = stat.reduce((x, y) => x + y)/n;
    let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(n - 1)));
    console.log(`Standard Devation = ${stDev}`);
});
stVariance();

module.exports = stVariance;
