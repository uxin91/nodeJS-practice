/**
 * Created by 11 on 2017/4/21.
 */
const app = require('express')();
app.get('/a',(req,res)=>{
    res.send('hello word');
})

app.listen(3000,()=>{
    console.log('run...')
})
