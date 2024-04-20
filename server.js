
const data = require('./data.js').peliculas



const http = require('node:http');
const { peliculas } = require('./data.js');

const server = http.createServer((request, response) => {


    response.end(`<p>${peliculas.title}</p>`)


})

server.listen(5000, () => {
    console.log('server listening on port 5000')
})