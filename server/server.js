const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '..', 'public');
var app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res, next) => {
//     res.send("Hello");
//     next();
// })

app.use(express.static(publicPath));

console.log(__dirname+'/../public');
console.log(publicPath);

app.listen(port, ()=> {
    console.log(`server is running at port ${port}`);
})