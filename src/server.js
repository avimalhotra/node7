const netList=require('network-list');
require('nodemailer');



/* netList.scanEach({}, (err, obj) => {
    console.log(obj); // device object
}); */

// netList.scan({}, (err, arr) => {
//     console.log(arr); // array with all devices
// });

/* const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();
 
getNetworkDownloadSpeed();
 
async function getNetworkDownloadSpeed() {
  const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
  const fileSizeInBytes = 50000000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log(speed);
}

getNetworkUploadSpeed();
 
async function getNetworkUploadSpeed() {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const fileSizeInBytes = 2000000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  console.log(speed);
} */


/* const readXlsxFile = require('read-excel-file/node');
readXlsxFile('src/techaltum.xlsx').then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    rows.forEach((i)=>{
        console.log(i);
    })
  }); */

