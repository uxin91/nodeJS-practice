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
        //�����������˼����

        console.log(url.parse(req.url,false));   //�����ַ���
        console.log(url.parse(req.url,true));      //���ض���   query: { code: 'no123' }
        let obj=url.parse(req.url,true).query;  //get��ʽ�����������,ͨ�����﷨���
        let stu = data[obj.code];
        if(stu){
            fs.readFile(path.join(__dirname,'./tem3.html'),'utf8',(err,data)=>{
                let html = data.replace('$$code$$',obj.code);   //������˼��
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
