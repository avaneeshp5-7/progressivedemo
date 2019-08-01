const exp=require('express');
const app=exp()
const port=process.env.PORT || 3000
app.use(exp.static(__dirname + '/dist/reactive8'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/reactive8/index.html'));
})

app.listen(port,()=>{
    console.log(`Running on 3000`)
})