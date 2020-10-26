const express=require('express');
/* express().use((req,res)=>{
  res.send("hello express");
}).listen(3000); */
let app=express();
let router=express.Router();
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
app.use(bodyParser());
app.use(cookieParser());

let admin=require('./routes/admin');
let user=require('./routes/user');

//app.use(express.static('src/public'));

app.use((req,res,next)=>{
  //console.log(`App started at ${Date.now()}`);
  next();
});


app.use('/admin',admin);
app.use('/user',user);

/* app.use((req,res)=>{
  res.status(200);
  res.setHeader('Content-Type','text/html');
  res.send('hello express js');
}); */

app.get('/',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.status(200).send(req.cookies);
  //res.cookie('city', 'del', {signed: true})
  //res.status(200).send(req.signedCookies);
});











/* app.get('/admin',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.send("hello admin");
});
app.get('/user',(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.send("hello user");
}); */
app.get('/formdata',(req,res)=>{
  //res.status(200).send(req.url);
  res.status(200).json({'parameters':req.query});
  //res.status(200).json(req.query);
});
app.get('/product/:brand/:phone/:model',(req,res)=>{
  res.status(200).send(req.params);
})

app.post('/formdata',(req,res)=>{
   if( req.body.name=="admin" && req.body.pass=="1234" ){
     res.status(200).send("Hello Admin")
   }
   else{
    res.status(200).send("Invalid Userid or password")
   }
  //res.status(200).send(req.body);
  //res.status(200).send("Post method");
  
});

/* wildcard handler */
app.get('/**',(req,res)=>{
  res.status(404);
  res.setHeader('Content-Type','text/html');
  res.status(404).send("404 error");
});
app.listen(3000,()=>{
  console.log(`app running at http://127.0.0.1:3000`);
});
