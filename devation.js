const stError = require('./sterror');
const stDev = require('./stdev');
const stat = require('./index');

// const st1 = stError();
// const st2 = stDev();

// const stDev = (() => {
//     let v = stat.reduce((x, y) => x + y);
    
//     let sqrv = stat.reduce((x, y) => x + y)/stat.length;
//     let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(stat.length - 1)));
//     console.log(`Standard Devation = ${Math.sqrt(stDev)}`);
// });
// stDev();

// const stError = (() => {
//     // stDev();
//     let v = stat.reduce((x, y) => x + y);
    
//     let sqrv = stat.reduce((x, y) => x + y)/stat.length;
//     let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(stat.length - 1)));
//     let nRoot = Math.sqrt(stat.length);
   
//     let standard_error = stDev/nRoot;
//     console.log(`Standard Error = ${standard_error}`);
// });
// stError();


const deviation = (() => {
    let v = stat.reduce((x, y) => x + y);
    
    let sqrv = stat.reduce((x, y) => x + y)/stat.length;
    let stDev = Math.sqrt(((Math.pow((v - sqrv), 2))/(stat.length - 1)));
    // console.log(`Standard Deviation = ${stDev}`);


    let v1 = stat.reduce((x, y) => x + y);
    
    let sqrv1 = stat.reduce((x, y) => x + y)/stat.length;
    let stDev1 = Math.sqrt(((Math.pow((v1 - sqrv1), 2))/(stat.length - 1)));
    let nRoot = Math.sqrt(stat.length);
   
    let standard_error = stDev1/nRoot;
    console.log(`Standard Error = ${standard_error}`);
    console.log(`Deviation = ${stDev - nRoot}`);
});
deviation();