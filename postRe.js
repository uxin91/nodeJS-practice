/**
 * Created by 11 on 2017/4/18.
 */

const static = require('./static-server.js');
const http = require('http');
const query = require('querystring');

http.createServer((req,res)=>{
    static.initStaticServer(req,res,__dirname,'/www');
    if(req.url.startsWith('/check')){
        let pdata = '';
        let num = 1;
    //    基于事件的回调函数，用一次调用一次
        req.on('data',(chunk)=>{
            num++;
            pdata+=chunk;
        });
    //    接受所有的数据后调用end函数
        req.on('end',()=>{
            let obj = query.parse(pdata);
        //    设置相应内容和编码
            res.writeHead(200,{
                'Content-Type':'text/plain;charset = utf8'
            });
            if(obj.username=='admin'&&obj.password=='123'){
                res.end('success')
            }else{
                res.end('wrong')
            }
        })
    }
}).listen(3000,()=>{
    console.log('right');
})
