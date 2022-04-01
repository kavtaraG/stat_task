const stVariance = require('./stdev');
const stat = require('./index');

const st = stVariance;


const stError = (() => {
    let v = stat.reduce((x, y) => x + y);
    
    let sqrv = stat.reduce((x, y) => x + y)/stat.length;
    let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(stat.length - 1)));
    let nRoot = Math.sqrt(stat.length);
   
    let standard_error = stDev/nRoot;
    console.log(`Standard Error = ${standard_error}`);
})
stError();

module.exports = stError;