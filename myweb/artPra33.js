/**
 * Created by 11 on 2017/4/22.
 */
const path = require('path');
const express = require('express');
const app = express();
const art = require('art-template');


//设置模版引擎渲染函数
app.engine('.html',art.__express);
//设置模版引擎渲染路径
app.set('views',path.join(__dirname,'./view2'));
//设置模版引擎
app.set('view engine','html');
app.get('/',(req,res)=>{
    let data={
        ti:'title',
        list:['apple','juice']
    }
    //渲染模版引擎,render第一个参数,目标文件（不加路径和后缀）,第二个参数渲染数据
    res.render('txt',data);
})
//启动监听
app.listen(3000,()=>{
    console.log('success...');
})
