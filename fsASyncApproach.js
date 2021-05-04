const {readFile, writeFile } = require('fs')

readFile('./contant/first.txt','utf8', (err, result)=>{
if(err){
    console.log(err);
    return;
}
const first = result;
readFile('./contant/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./contant/result.txt',
    `Here is the result : ${first},${second}`,
    (err, result)=> {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);

    })

    })
} )