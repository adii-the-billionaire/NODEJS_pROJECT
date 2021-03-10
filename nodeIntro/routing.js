//for the precise understanding url that connect to server
//routing for client side nd server side
const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/' || pathName === '/riya') {
        res.end('hi bod')
    } else if (pathName === '/age') {
        res.end('riya age is 20')
    } else if (pathName === '/riya/age/body') {
        res.end('this is a body')
    } else {
        res.writeHead(404, {
                'Content-type': 'text/html'
            }) //writhead also sends a header
        res.end('<h1>page not found</h1>')
    }
    console.log(req.url)
})
server.listen(8000, '127.0.0.1', () => {
    console.log('app is connected to the server')
})