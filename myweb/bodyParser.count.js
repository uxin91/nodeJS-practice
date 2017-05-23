/**
 * Created by 11 on 2017/4/22.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//计数
let count = 0;
//创建静态服务资源
app.use(express.static('test'));
//处理表单提交数据
app.use(bodyParser.urlencoded({extended:false}));
//处理json数据
app.use(bodyParser.json());
//处理访问时间
app.use((req,res,next)=>{
    console.log(req.url + '+访问时间+' + Date.now());
    next();
})
//统计次数
app.use((req,res,next)=>{
    count++;
    console.log(count);
    next();
})
//提交方式
app.get('/user',(req,res)=>{
    console.log(req.body);
    res.end('success');
})
//设置监听
app.listen(3000,()=>{
    console.log('成功')
})