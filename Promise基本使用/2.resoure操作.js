const fs = require('fs')
/*
fs.readFile('./resoure体验/hello.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})
*/
const P = new Promise((resolve, reject)=>{
    fs.readFile('./resoure体验/hello.txt',((err, data) => {
        if(err) reject(err);
         resolve(data)
    }))
})
P.then((value)=>{
    console.log(value.toString());
},(reason)=>{
    console.log(reason);
})