const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});

switch(req.url){
    case "/":
        res.end("Você esta na home page!");
        break
    case "/contato":
        res.end('Você esta na pagina de Contato!');
        break
    default:
        res.end("Sem resultado para a Pesquisa")
        break

}
}).listen(3050, 'localhost');