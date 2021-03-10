const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req) //that show built a ton of object
    res.end(`helllo from the server`)
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requires on port 8000')
})