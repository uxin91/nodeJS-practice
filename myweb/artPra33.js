/**
 * Created by 11 on 2017/4/22.
 */
const path = require('path');
const express = require('express');
const app = express();
const art = require('art-template');


//����ģ��������Ⱦ����
app.engine('.html',art.__express);
//����ģ��������Ⱦ·��
app.set('views',path.join(__dirname,'./view2'));
//����ģ������
app.set('view engine','html');
app.get('/',(req,res)=>{
    let data={
        ti:'title',
        list:['apple','juice']
    }
    //��Ⱦģ������,render��һ������,Ŀ���ļ�������·���ͺ�׺��,�ڶ���������Ⱦ����
    res.render('txt',data);
})
//��������
app.listen(3000,()=>{
    console.log('success...');
})
