/**
 * Created by 11 on 2017/4/18.
 */

const http = require('http');
//http.createServer((request,reponse)=>{
//    reponse.write('hello world xxx!');
//    reponse.end();
//}).listen(3000)
//

//第二种

let server = http.createServer();
server.on('request',(re,rp)=>{
    rp.end('hhhh')
})

server.listen(3000)