const express=require("express");
const path=require("path");
const nunjucks=require('nunjucks');

/* const ejs=require("ejs"); */
const app=express();
// configure
nunjucks.configure(path.resolve(__dirname,'public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
}); 
/* const LRU = require('lru-cache');
ejs.cache=new LRU(100); */

//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'public/views'));

app.use(express.static(path.resolve(__dirname,'public')));

app.get("/",(req,res)=>{
    //res.render('home',{name:"ejs",user:{name:"avi",id:212},month:["jan","feb","mar","apr","may","june"]});
    res.render('index.html',{name:"Nunjucks",user:{name:"avi",id:212},month:["jan","feb","mar","apr","may","june"]});
});
app.get("/about",(req,res)=>{
    res.render('about.html')
});
app.get("/contact",(req,res)=>{
    res.render('contact.html')
});
app.get("/**",(req,res)=>{
    res.status(404).render('error.html')
});

app.listen(3000,()=>{
    console.log("express server running on ", 3000)
});
