const http = require('http');
const fs = require('fs');


const home_html = fs.readFileSync('./htmls/home.html', 'utf-8');
const about_html =  fs.readFileSync('./htmls/about.html', 'utf-8');
const login_html = fs.readFileSync('./htmls/login.html', 'utf-8');

const server = http.createServer((req, res)=> {
    if(req.url==='/about'){
        res.end(about_html);
    }
    else if(req.url === '/home'){
        res.end(home_html);
    }else if(req.url === '/login'){
        res.end("Wlecome to the login page");
    }else{
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(8000);