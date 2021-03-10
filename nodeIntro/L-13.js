//building a very simple api
const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    const pathName = req.url
    if (pathName === '/api') {
        fs.readFile('./L-13.json', 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
                // console.log(productData)
            const myInfo = productData[0].description
                // res.writeHead('200', { 'Content-type': 'application/json' })
                // res.end(data)
                // res.end(productData)
            console.log(myInfo)
            res.end(myInfo)
        })
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('server is connected')
})