/**
 * Created by 11 on 2017/4/21.
 */
const app = require('express')();
let server = app.use((req,res)=>{
    res.send(req.url);
}).listen(3000,()=>{
    console.log('run')
})