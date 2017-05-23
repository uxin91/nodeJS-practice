/**
 * Created by 11 on 2017/4/21.
 */
const express = require('express');
const router = express.Router();

router.get('/user',(req,res)=>{
    res.end('get data');
});
router.post('/user',(req,res)=>{
    res.end('post data');
});
router.put('/user',(req,res)=>{
    res.end('put data');
});
router.delete('/user',(req,res)=>{
    res.end('delete data');
});
module.exports = router;
