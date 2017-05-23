/**
 * Created by 11 on 2017/4/20.
 */
const http =  require('http');
let static = require('./static-server.js')
const url = require('url')
const path = require('path');
const fs = require('fs')
const data = require('./tem3.js')

http.createServer((req,res)=>{
     static.initStaticServer(req,res,__dirname,'/www3');
    if(req.url.startsWith('/query')){
        //下面两句的意思？？

        console.log(url.parse(req.url,false));   //返回字符串
        console.log(url.parse(req.url,true));      //返回对象   query: { code: 'no123' }
        let obj=url.parse(req.url,true).query;  //get方式请求解析数据,通过点语法点出
        let stu = data[obj.code];
        if(stu){
            fs.readFile(path.join(__dirname,'./tem3.html'),'utf8',(err,data)=>{
                let html = data.replace('$$code$$',obj.code);   //这句的意思？
                html = html.replace('$$name$$',stu.name);
                html = html.replace('$$age$$',stu.age);
                html = html.replace('$$sex$$',stu.sex);
                res.end(html)
            })
        }else{
            res.end('aaaa')
        }

    }


}).listen(3000,()=>{
    console.log('run....')
})
