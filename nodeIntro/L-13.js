//building a very simple api
const fs = require('fs')
const http = require('http')
const url = require('url')
const data = fs.readFileSync('./L-13.json', 'utf-8') //this does not have call back function 
const dataObj = JSON.parse(data)
const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/api') {
        res.writeHead('200', { 'Content-type': 'application/json' })
        res.end(data)
    }
})
server.listen(8000, '127.0.0.1', () => {
        console.log('server is connected')
    })
    //when you making request every time this code execute so make this synchronously