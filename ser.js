/**
 * Created by 11 on 2017/4/18.
 */
const http = require('http');  //const ��������һ�ζ������Ͳ��ܸ���
const path = require('path');
const fs = require('fs');
let nameDir = '/www';    //let ����
http.createServer((req,res)=>{
    if(req.url.startsWith(nameDir)){
    //basename��ȡ�ļ�����www/index ��ȡб�ܺ�index����
    let fileName = path.basename(req.url);
        fs.readFile(path.join(__dirname,nameDir,fileName),(err,data)=>{
            console.log(err);
            res.end(data);
        })

}
}).listen(3000,()=>{
    console.log('success');
})
