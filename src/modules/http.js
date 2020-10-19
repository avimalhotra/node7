const http = require('http');
const fs = require('fs');
let port = 3000;
let ip = '127.0.0.1';

let days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];
/* http.createServer((req,res)=>{
  res.end("hello node");
}).listen(3000); */

var server = http.createServer((req, res) => {
  //res.statusCode=200;
  //res.setHeader("Content-Type","text/html");
  res.writeHead(200, { 'Content-Type': 'text/html' });

  /* fs.readFile('src/index.html', (err, data) => {
    if (err) {
      res.write(` Error: ${err}`);
    }
    else {
      res.write(data);
    }

    res.end();

  }) */


  res.write(req.url);
  res.write(req.method);
  res.write("<h1>Node JS</h1>");
  res.write("<p>Node JS HTTP Module</p>");
  res.write("<ol>");
    days.forEach((i)=>{
      res.write(`<li> ${i} </li>`);
    });
  res.write("</ol>");
  res.end(); 


});

server.listen(port, ip, () => {
  console.log(`http server running at http://127.0.0.1:${port} `)
});