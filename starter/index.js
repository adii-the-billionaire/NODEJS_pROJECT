const fs = require('fs')
const http = require('http')
const url = require('url')
const { runInNewContext } = require('vm')
const tempOverview = fs.readFileSync(`${__dirname}/templates/overview.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/figure.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)
const replaceTemplates = (temp, product) => {
    let output = temp.replace(/{%productName%}/g, product.productName)
    output = output.replace(/{%image%}/g, product.image)
    output = output.replace(/{%productPrice%}/g, product.price)
    output = output.replace(/{%productFrom%}/g, product.from)
    output = output.replace(/{%productQuantity%}/g, product.qunatity)
    output = output.replace(/{%productNutrients%}/g, product.nutrients)
    output = output.replace(/{%productDesciption%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)
    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    return output
}
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true)
    console.log(query)
    console.log(pathname)
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        const cardsHtml = dataObj.map(el => replaceTemplates(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)
        res.end(output)
    } else if (pathname === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        const product = dataObj[query.id]
        const output = replaceTemplates(tempProduct, product)
        res.end(output)
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log('ur server is connects')
})