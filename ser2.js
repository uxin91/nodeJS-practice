/**
 * Created by 11 on 2017/4/18.
 */
const path = require('path');
const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{

    res.end('neirong')
}).listen(3000,()=>{
    console.log('success')
})
