// function aa() {
//     console.log("first");
// }
// setTimeout(aa, 2000);
// (function() {
//     console.log("second");
// })();
// let a= new Function(`console.log("constructor");`);
// a()
// let b=()=> {
//     console.log("Third");
// }


// function rollnumber(num){
//     console.log("rollnumber",num);
// }

// setTimeout(rollnumber,1000,35);
// setTimeout(rollnumber,2000,57);


// function getRoll(num, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Roll. No. is", num);
//         resolve("Successfully Done");
//       }, delay);
//     });
//   }
//   getRoll(1, 1000).then(() => {

//     getRoll(2, 10000).then(() => {

//       getRoll(3, 30000);
//     });
//   });


// const promise = new Promise(function(resolve, reject) {
//     console.log('My first Promise')
//     resolve("resolved");
//     //reject("rejected");
// });
// //promise.then(() => {
//     //console.log('My first Promise then')//ful filled ,call by chaining
// // console.log("")}).catch(() => {
//    // console.log('My first Promise catch')
// //})
// promise.then(console.log)


