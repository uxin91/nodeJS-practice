/**
 * Created by 11 on 2017/4/22.
 */
const path = require('path');
const express = require('express');
const app = express();
const mod = require('art-template');

//����ģ��������Ⱦ����
app.engine('.html',mod.__express);
//����ģ������·��
app.set('views',path.join(__dirname,'./view'));
//����ģ������
app.set('view engine','html');
app.get('/',(req,res)=>{
    let data = {
        title:'fruit',
        items:['orange','apple']
    }
    res.render('mod',data)
})
//��Ⱦģ������

app.listen(3000,()=>{
    console.log('success...');
})

