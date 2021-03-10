const fs = require('fs')
const http = require('http')
const url = require('url')
const data = fs.readFileSync('./dev-data/data.json', 'utf-8')
const dataObj = JSON.parse(data)
const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
            // console.log(dataObj)
        res.end(data)
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('server is connected  hurray')
})