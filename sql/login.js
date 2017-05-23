/**
 * Created by 11 on 2017/4/23.
 */
const express = require('express');
const bodyp = require('body-parser');
const app = express();
const db = require('./db.js')

app.use(bodyp.urlencoded({extended:false}))
app.use(express.static('w'));
app.post('/login',(req,res)=>{
    let param = req.body;
    let sql = 'select count(*) as cc from book where username=? and password=?';
    let data = [param.username,param.password]
    db.base(sql,data,(ret)=>{
        if(ret[0].cc==1){
            res.send('success')
        }else{
            res.send('fail')
        }
    })
})

app.listen(3000,()=>{
    console.log('run')
})
