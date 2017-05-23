/**
 * Created by 11 on 2017/4/21.
 */
const express = require('express');
const app = express();
const body = require('body-parser');

//����
let count = 0;

//������̬����
app.use(express.static('test'));
//������ύ����
app.use(body.urlencoded({extended:false}));
//����json����
app.use(body.json());
//�������ʱ��
app.use((req,res,next)=>{
    console.log(req.url + 'visitTime' + Date.now());
    //ͨ��next����
    next();
})
//ͳ�ƴ���
app.use((req,res,next)=>{
    count++;
    console.log(count);
    next();
})

//post�ύ����
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

