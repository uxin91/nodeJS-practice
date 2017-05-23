/**
 * Created by 11 on 2017/4/18.
 */
const http = require('http');  //const 常量，第一次定义后面就不能更改
const path = require('path');
const fs = require('fs');
let nameDir = '/www';    //let 变量
http.createServer((req,res)=>{
    if(req.url.startsWith(nameDir)){
    //basename读取文件名字www/index 读取斜杠后index名字
    let fileName = path.basename(req.url);
        fs.readFile(path.join(__dirname,nameDir,fileName),(err,data)=>{
            console.log(err);
            res.end(data);
        })

}
}).listen(3000,()=>{
    console.log('success');
})
