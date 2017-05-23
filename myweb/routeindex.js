/**
 * Created by 11 on 2017/4/21.
 */
const express = require('express');
const app = express();
const router = require('./route.js');

app.use(express.static('test'));
app.use('/admin',router);
app.listen(3000,()=>{
    console.log('run')
})