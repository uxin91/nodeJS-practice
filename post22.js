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
    //    �¼��ص�����һ�ε���һ��
        req.on('data',(chunk)=>{
            num++;
            pdata+=chunk;
        });

    //    �������Եĺ�̨���ݺ����end����
        req.on('end',()=>{
            let obj = query.parse(pdata);  //ת�����ַ���
        //    ������Ӧ�����ݺͱ���
            res.writeHead(200,{
                'Content-Type':'text/plain;charset=utf8'
            });

            if(obj.username=='admin'&&obj.password=='123'){
                res.end('�ɹ�')
            }else{
                res.end('ʧ��')
            }
        })
    }
}).listen(3000,()=>{        //���ö˿�
    console.log('run....')
})
