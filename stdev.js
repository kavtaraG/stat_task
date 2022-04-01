const avg = require('./avg');
const stat = require('./index');

const stdDev = avg();

const stVariance = (() => {
    let v = stat.reduce((x, y) => x + y);
    
    let sqrv = stat.reduce((x, y) => x + y)/stat.length;
    let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(stat.length - 1)));
    console.log(`Standard Devation = ${stDev}`);
});
stVariance();

module.exports = stVariance;