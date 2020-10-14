
let x=3;
let y=4;

var ext=require('./ext');               // module ext.js
const colors=require('colors');

const circle=require('./circle');
const rect=require('./rect');


var t=4;
//console.error(`sum is ${x+y}`);

//console.log(__filename);
//console.log(__dirname);

//console.log(console==global.console);

//console.log(name,id);


console.log(ext.tid);
console.log(ext.user.name, ext.user.id);
console.log("this text is red".red);
console.log("this text is green".green);
console.log("this text is blue".blue);

console.log(`Area of circle is ${circle.area}`);
console.log(`Area of circle is ${circle.checkArea()}`);
console.log(`Area of rectangle is ${rect.area}`);
