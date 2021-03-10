const fs = require('fs')
const http = require('http')
const url = require('url')
const data = fs.readFileSync('./dev-data/data.json', 'utf-8')
const dataObj = JSON.parse(data)

const overview = fs.readFileSync('./templates/overview.html', 'utf-8')
const figure = fs.readFileSync('./templates/figure.html', 'utf-8')
const product = fs.readFileSync('./templates/product.html')


const server = http.createServer((req, res) => {
    const pathName = req.url

    //overview pag
    if (pathName === '/' || pathName === "/overview") {
        res.writeHead('200', { 'Content-type': 'text/html' })
        res.end(overview)
    } else if (pathName === '/product') {
        res.end('this is the product')
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
            // console.log(dataObj)
        res.end(data)
    } else {
        res.writeHead('404', {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found !</h1>')
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('server is connected  hurray')
})