/**
 * Created by 11 on 2017/4/22.
 */
const express = require('express');
const router = require('./route.js')
const app = express();

//先用use方法创建静态服务器
app.use(express.static('test'));
//启用路由
app.use(router);
//监听
app.listen(3000,()=>{
    console.log('run')
})
