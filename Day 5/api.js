let url ='https://api.github.com/users/Khushitiwari184';
let b=fetch(url);
b.then((data)=>{
    console.log(data)
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log('Error');
}).finally(()=>{
    console.log('Finally');
})
async function data1() {
    let url ='https://api.github.com/users';
    let b = await fetch(url);
    let data = await b.json();
    console.log(data);
}
data1()