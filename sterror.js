const stVariance = require('./stdev');
const stat = require('./index');

const st = stVariance;


const stError = (() => {
    let n = 3500000;
    let v = stat.reduce((x, y) => x + y);
    
    let sqrv = stat.reduce((x, y) => x + y)/n;
    let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(n - 1)));
    let nRoot = Math.sqrt(n);
   
    let standard_error = stDev/nRoot;
    console.log(`Standard Error = ${standard_error}`);
})
stError();

module.exports = stError;
