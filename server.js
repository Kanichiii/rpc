const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("Please wait...")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("status on")});
}
module.exports = keepAlive