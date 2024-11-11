// let promise = new Promise((resolve, reject) => {
//     resolve({user:"AJ",pass:"12345"});
//     });
//     promise.then((data) => {
//     console.log(data);
//     return data;
//     }).then(
//         (res)=>{
//             console.log(res.user);

//         }).catch(() => {
//     console.log('Error');
//     }).finally(() => {
//         console.log('Finally');
//     })



// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Roll number is",+num);
//             resolve("Successfully Done");
//         },delay)
//     });
// }
// roll(1,1000).then(()=>{
//     roll(2,2000).then(()=>{
//         roll(3,3000).then(()=>{
//             console.log("all rolls are done")
//         })
//     })
// })


// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Roll number is",+num);
//             resolve("");
//         },delay)
//     });
// }
// async function getRoll() {
//     let roll1=await roll(12,1000);
//     let roll2=await roll(2,2000);
// }




// roll(1,1000).then(()=>{
//     roll(2,2000).then(()=>{
//         roll(3,3000).then(()=>{
//             console.log("all rolls are done")
//         })
//     })
// }).catch(()=>{
//     console.log("Error")
// })


// function roll(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Roll number is",+num);
//             resolve("");
//         },delay)
//     });
// }
// async function getRoll() {
//     await roll(12,1000);
//     await roll(2,2000);
// }
// getRoll();


// function restrant(item,time) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Order is",item);
//             resolve("Order is Done");
//         },time)
//     });
// }
// async function getRestrant() {
//     await restrant("Biryani",1000);
//     await restrant("Pulav",2000);
//     await restrant("Fried Rice",3000);
// }
// getRestrant();


function restrant(item,time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order is",item);
            resolve("Order is Done");
        },time)
    });
}