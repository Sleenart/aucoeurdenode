//* * using pipe()
// const createReadStream = require('fs').createReadStream;

// const readable = createReadStream('./fruits.txt');
// readable.pipe(process.stdout);

// //** read file using events
// const createReadStream = require('fs').createReadStream;

// const readable = createReadStream('./fruits.txt');
// readable.on('data', (chunk) => {
//   console.log(chunk.toString());
// });

// readable.on('end', () => {
//   console.log('fini de lire !');
// });

// //** create a writable stream
// const { createReadStream, createWriteStream } = require('fs');

// const readStream = createReadStream('./fruits.txt');
// const writeStream = createWriteStream('./fruits_copy.txt');

// readStream.on('data', (chunk) => {
// 	writeStream.write(chunk);
// });

// readStream.on('error', (error) => {
// 	console.log('erreur : ', error.message);
// });

// // when readable stream ends, let's also end the writable stream
// readStream.on('end', () => {
// 	writeStream.end();
// });

// // ** create massive file
// const fs = require('fs');
// const file = fs.createWriteStream('./massif.txt');

// for(let i=0; i<= 1e5; i++) {
//   file.write(`${i} - je me répète mais je ne suis pas fou\n`);
// }

// file.end();

// // ** create big file
// const fs = require('fs');
// const file = fs.createWriteStream('./big.txt');

// for(let i=0; i<= 100; i++) {
//   file.write(`${i} - je me répète mais je ne suis pas fou\n`);
// }

// file.end();

// // ** custom class inheriting from Readable
// const { Readable } = require('stream');

// const text = `Gros test
// sur plusieurs lignes
// déjà la fin
// `;
// class StreamText extends Readable {
//   constructor(text) {
//     super();
//     this.text = text;
//     this.sentences = text.split('\n');
//   }

//   _read() {
//     this.sentences.map(data => {
//       this.push(data);
//     });
//     this.push(null);
//   }
// }
// const streamText = new StreamText(text);
// // streamText.on('data', (chunk) => console.log(chunk.toString()));
// // streamText.on('end', () => console.log('lecture terminée'));

// // ** custom class inheriting from writable
// const { Writable } = require('stream');

// class CustomWritable extends Writable {
//   _write(chunk, enc, next) {
//     // console.log(chunk.toString().trim().length);
//     console.log(chunk.toString().trim().toUpperCase());
//     next();
//   }
// }
// const cw = new CustomWritable();
// streamText.pipe(cw);

// // ** transform
// const { Transform } = require('stream');

// class Slugify extends Transform {
//   _transform(chunk, encoding, next) {
//     const slug = chunk.toString().trim().replace(/\s+/g, '-');
//     this.push(slug + '\n');
//     next();
//   }

//   _flush(next) {
//     console.log('bye bye');
//   }
// }

// const slugify = new Slugify();
// process.stdin.pipe(slugify).pipe(process.stdout);

// // ** PassThrough
// const { createReadStream, createWriteStream } = require('fs');
// const { PassThrough } = require('stream');
// const myReadStream = createReadStream('./big.txt');
// // const myWriteStream = createWriteStream('./fruits_destination.txt');

// const myPassThrough = new PassThrough();
// var total = 0;
// myPassThrough.on('data', (chunk) => {
//   total += chunk.length;
//   console.log(`${total} octets`);
// });
// myReadStream.pipe(myPassThrough).pipe(process.stdout);

// // ** duplex
// var net = require('net')
// // for every TCP connexion that's incoming, net.createServer() returns a duplex stream
// net.createServer(function (stream) {
// 	// you can pipe a duplex stream into itself without creating an infinite loop
// 	stream.pipe(stream)
// }).listen(5000)

// // usage
// node index.js
// // on another terminal
// nc localhost 5000
// hello
// // reponse
// hello

// // ** custom class inheriting from Readable and streaming objects
// const { Readable } = require('stream');

// const text = `Gros test
// sur plusieurs lignes
// déjà la fin
// `;
// class StreamText extends Readable {
//   constructor (text) {
//     // super();
//     super({ objectMode: true }); // here
//     this.text = text;
//     this.sentences = text.split('\n');
//   }

//   _read () {
//     this.sentences.map(data => {
//       const obj = {
//         data: data,
//         length: data.length
//       };
//       this.push(obj);
//     });
//     this.push(null);
//   }
// }
// const streamText = new StreamText(text);
// streamText.on('data', (chunk) => console.log(JSON.stringify(chunk)));
// streamText.on('end', () => console.log('lecture terminée'));

// // ** without streams
// const fs = require('fs');
// const http = require('http');
// const videoPath = './videos/ionicdevappdemo.mp4';
// const server = http.createServer();

// server.on('request', (req, res) => {
//   if (req.url === '/favicon.ico') return;
//   if (req.url === '/contact') {
//     memoryUsageInMegaBytes(`route "${req.url}"`);
//     res.end('contactez-nous');
//   } else if (req.url === '/videos') {
//     memoryUsageInMegaBytes(`route "${req.url}" (avant le cb de fs.readFile)`);
//     fs.readFile(videoPath, (error, data) => {
//       memoryUsageInMegaBytes(`route "${req.url}" (dans le cb de fs.readFile)`);
//       if (error) {
//         console.error('échec de lecture', error.message);
//       }
//       res.writeHead(200, { 'Content-Type': 'video/mp4' });
//       res.end(data);
//     });
//   } else {
//     memoryUsageInMegaBytes(`route "${req.url}" (dans le else)`);
//     res.end(`sur la page ${req.url}`);
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`serveur sur port ${port}`);
// });

// function memoryUsageInMegaBytes (pageUrl) {
//   const used = process.memoryUsage();
//   console.log(`==== ${pageUrl} start =======`);
//   for (let key in used) {
//     console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} Mo`);
//   }
//   console.log(`==== ${pageUrl} end  ======\n\n`);
// }

// // ** avec streams
// const http = require('http');
// const { createReadStream } = require('fs');
// const videoPath = './videos/ionicdevappdemo.mp4';
// const server = http.createServer();

// server.on('request', (req, res) => {
//   if (req.url === '/favicon.ico') return;
//   if (req.url === '/contact') {
//     memoryUsageInMegaBytes(`route "${req.url}"`);
//     res.end('contactez-nous');
//   } else if (req.url === '/videos') {
//     const myReadStream = createReadStream(videoPath);
//     memoryUsageInMegaBytes(`route "${req.url}" (avant le pipe)`);
//     res.writeHead(200, { 'Content-Type': 'video/mp4' });
//     myReadStream.pipe(res);
//     memoryUsageInMegaBytes(`route "${req.url}" (après le pipe)`);
//   } else {
//     memoryUsageInMegaBytes(`route "${req.url}" (dans le else)`);
//     res.end(`sur la page ${req.url}`);
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`serveur sur port ${port}`);
// });

// function memoryUsageInMegaBytes (pageUrl) {
//   const used = process.memoryUsage();
//   console.log(`==== ${pageUrl} start =======`);
//   for (let key in used) {
//     console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} Mo`);
//   }
//   console.log(`==== ${pageUrl} end  ======\n\n`);
// }

// ** create hash from stdin
const crypto = require('crypto');
const hasher = crypto.createHash('sha512', { encoding: 'hex' });
process.stdin.pipe(hasher).pipe(process.stdout);

// ** create hash from readable based on file
const { createReadStream } = require('fs');
const myReadable = createReadStream('./blagues.txt');
myReadable.pipe(hasher).pipe(process.stdout);
