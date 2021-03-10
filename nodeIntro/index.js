//how to read data 
//how to write dat
const fs = require('fs')
const text = `hi`
fs.writeFileSync('1.txt', text)
fs.readFileSync('./1.txt',
    'utf-8', (error, data) => {
        return console.log(data)
    })
console.log('hl sync')

//passing callback