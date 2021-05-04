const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("this is the home page")
    }
    if (req.url === '/about'){
        res.end('ths is the brief history')
    }
    res.end(`
    <h1>Opps!!   </h1>
    <p>page not found</p>
    <a href='/'>Home Page</a>
    `)
})
server.listen(5000)