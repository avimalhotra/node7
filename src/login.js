var t=require('./server');

t.on("login",(res)=>{
    console.log("Login process starts at",res)
});
t.on("login",()=>{
    console.log("login process done");
});
