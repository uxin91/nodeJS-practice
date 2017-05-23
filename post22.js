/**
 * Created by 11 on 2017/4/18.
 */
const http = require('http');
const sta = require('./static-server.js');
const query = require('querystring');

http.createServer((req,res)=>{
    sta.initStaticServer(req,res,__dirname,'/www2');
    if(req.url.startsWith('/check')){
        let pdata = '';
        let num = 1;
    //    事件回调，用一次调用一次
        req.on('data',(chunk)=>{
            num++;
            pdata+=chunk;
        });

    //    接受所以的后台数据后调用end函数
        req.on('end',()=>{
            let obj = query.parse(pdata);  //转换成字符串
        //    设置相应的内容和编码
            res.writeHead(200,{
                'Content-Type':'text/plain;charset=utf8'
            });

            if(obj.username=='admin'&&obj.password=='123'){
                res.end('成功')
            }else{
                res.end('失败')
            }
        })
    }
}).listen(3000,()=>{        //设置端口
    console.log('run....')
})
