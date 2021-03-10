const fs = require('fs')
fs.readFileSync('start.txt', 'utf-8', (err, data1) => {
    fs.readFileSync(`${data1}.txt`, 'utf-8', (err, data2) => {
        fs.readFileSync('append.txt', 'utf-8', (err, data3) => {
            fs.writeFileSync('final.txt', `${data2}${data3}`, 'utf-8', (err) => {
                if (err) throw err
                console.log('your file has been saved')
            })
        })
    })
})