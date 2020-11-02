const express=require("express");
const path=require("path");
const ejs=require("ejs");
const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.use(express.static(path.resolve(__dirname,'public')));

app.get("/",(req,res)=>{
    res.render('home',{name:"ejs",user:{name:"avi",id:212}});
});

app.listen(3000,()=>{
    console.log("express server running on ", 3000)
});
