const fs = require('fs')
fs.readFile('./start.txt', 'utf-8', (err, data) => {
    console.log(data)
})
console.log(`from synchronously`)
    //callback these file are made 
    //asynchrously file data becomes another file name