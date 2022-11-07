const http=require("http");
const requestlistener=function (req,res){

    res.writeHead(200);
    res.end("Hello")
}
const server=http.createServer(requestlistener);
server.listen(8080)