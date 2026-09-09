//exp4
const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("Hello, Welcome to Node.js!");
    res.end();
});

server.listen(3000, ()=> {
    console.log("Server is runig on port 3000");
});

//http://localhost:3000;






// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     res.end("request received");
// });

// server.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });