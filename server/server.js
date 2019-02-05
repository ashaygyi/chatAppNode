const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

// app.get('/', (req, res, next) => {
//     res.send("Hello");
//     next();
// })

app.use(express.static(publicPath));

// console.log(__dirname+'/../public');
// console.log(publicPath);

server.listen(port, ()=> {
    console.log(`server is running at port ${port}`);
})