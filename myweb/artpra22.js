/**
 * Created by 11 on 2017/4/22.
 */
const path = require('path');
const express = require('express');
const app = express();
const mod = require('art-template');

//设置模版引擎渲染函数
app.engine('.html',mod.__express);
//设置模版引擎路径
app.set('views',path.join(__dirname,'./view'));
//设置模版引擎
app.set('view engine','html');
app.get('/',(req,res)=>{
    let data = {
        title:'fruit',
        items:['orange','apple']
    }
    res.render('mod',data)
})
//渲染模版引擎

app.listen(3000,()=>{
    console.log('success...');
})

