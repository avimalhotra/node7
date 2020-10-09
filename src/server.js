const os=require('os');
const fs=require('fs');

//console.log(os.arch());
//console.log(os.cpus().length);              // no of threads
//console.log(os.cpus()[0]);              // cpu info

//console.log(os.totalmem()/1024/1024/1024)
//console.log(os.freemem()/1024/1024/1024)

//console.log(os.networkInterfaces());
//console.log(os.uptime()/60/60);
//console.log(os.userInfo());


//var data=fs.readFileSync('src/text.txt');

//console.log(data.toString());

fs.readFile('src/text.txt',{encoding:'utf8'},(err,data)=>{
    if( err){
        console.error(err);
    }
    else{
        console.log(data);
    }
});


console.log("app running");

fs.appendFile('src/fs/data.txt',"hello Node 2 \n",'utf8',(err)=>{
    if(err){
        console.log(err)
    }
})

