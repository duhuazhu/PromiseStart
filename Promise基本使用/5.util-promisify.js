const util = require('util')
const fs =  require('fs');
let miniReadFile = util.promisify(fs.readFile)
miniReadFile('./resoure体验/hello.txt').then((value)=>{
    console.log(value.toString());
})
