/**
 * Created by 11 on 2017/4/18.
 */
const http = require('http');

http.createServer((req,res)=>{
    if(req.url.endsWith('index.html')){
        res.end('index.html')
}else if(req.url.endsWith('about.html')){
    res.end('about.html')
}else{
    res.end('list.html')
}

}).listen(3000,()=>{
    console.log('success')
})
