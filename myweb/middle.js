/**
 * Created by 11 on 2017/4/21.
 */
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(req.url+'�����¼�'+Data.now())
})
app.get('/user',(req,res)=>{
    res.send('result');
    console.log('result')
})

app.listen(3000,()=>{
    console.log('success')
})
