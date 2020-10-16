const path=require('path');
const events=require('events').EventEmitter;
let emitter=new events();
module.exports=emitter;

emitter.once("log",(name)=>{
  console.log(`${name} user login`);
});
emitter.once("log",(name)=>{
  console.log(`${name} is available`);
});

//emitter.emit('login','avi');

require('./login');
require('./account');

emitter.emit('login',"10 AM");
emitter.emit('account');


/* emitter.on("done",(x)=>{
  console.log(`done`);
  x.handled=true;
})

emitter.on("done",(x)=>{
  if(x.handled){
      console.log(`already done`);
  }
});

emitter.emit('done',{handled:false}); */



//emitter.emit('login','isha');



//console.log(path.normalize('src/media/../../'))
//console.log(path.basename('./src/pic.jpg'))
//console.log(path.basename('./src/pic.jpg',".jpg"))
//console.log(path.dirname('./src/views/'));
//console.log(path.extname('./src/views/app.html'));
//console.log(path.resolve('./src/modules/'));
//console.log(path.resolve('src/','views'));
//console.log(path.join('./src/','views'));


