const fs = require('fs')
fs.readFile('start.txt', 'utf-8', (err, data1) => {
        fs.readFile(`${data1}.txt`, 'utf-8', (err, data2) => {
            fs.readFile('append.txt', 'utf-8', (err, data3) => {
                fs.writeFile('final.txt', `${data2}${data3}`, 'utf-8', (err) => {
                    if (err) throw err
                    console.log('your file has been saved')
                })
            })
        })
    })
    //if there is call back