const express=require('express');
/* express().use((req,res)=>{
  res.send("hello express");
}).listen(3000); */
let app=express();

app.use(express.static('src/public'));

app.use((req,res,next)=>{
  console.log(`App started at ${Date.now()}`);
  next();
});

app.use((req,res)=>{
  res.status(200);
  res.setHeader('Content-Type','text/html');
  res.send('hello express js');
});

app.listen(3000,()=>{
  console.log(`app running at http://127.0.0.1:3000`);
});
