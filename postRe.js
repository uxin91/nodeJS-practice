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
    //    �����¼��Ļص���������һ�ε���һ��
        req.on('data',(chunk)=>{
            num++;
            pdata+=chunk;
        });
    //    �������е����ݺ����end����
        req.on('end',()=>{
            let obj = query.parse(pdata);
        //    ������Ӧ���ݺͱ���
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
