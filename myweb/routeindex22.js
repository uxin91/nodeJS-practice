/**
 * Created by 11 on 2017/4/22.
 */
const express = require('express');
const router = require('./route.js')
const app = express();

//����use����������̬������
app.use(express.static('test'));
//����·��
app.use(router);
//����
app.listen(3000,()=>{
    console.log('run')
})
