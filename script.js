const express = require('express');
const app = express();
const axios = require('axios');


app.get("/", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })
});

app.get("/posts", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })

});

app.get("/comments", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })

});

app.get("/albums", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/albums'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })

});

app.get("/photos", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })

});

app.get("/todos", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })

});

app.get("/users", function (request, response) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    axios.get(apiUrl)
        .then((apiResponse) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        
        .catch((error) => {
            console.error('Erro ao acessar a API');
        })

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`)
});