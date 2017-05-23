/**
 * Created by 11 on 2017/4/21.
 */
const express = require('express');
const app = express();
const body = require('body-parser');

//计数
let count = 0;

//创建静态服务
app.use(express.static('test'));
//处理表单提交数据
app.use(body.urlencoded({extended:false}));
//处理json数据
app.use(body.json());
//处理访问时间
app.use((req,res,next)=>{
    console.log(req.url + 'visitTime' + Date.now());
    //通过next传递
    next();
})
//统计次数
app.use((req,res,next)=>{
    count++;
    console.log(count);
    next();
})

//post提交数据
//app.post('/user',(req,res) => {
//    console.log(req.body);
//    res.send('success');
//});

app.get('/user',(req,res) => {
    console.log(req.body);
    res.send('success');
});
app.listen(3000,()=>{
    console.log('success...');
})

