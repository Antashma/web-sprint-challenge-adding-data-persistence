// build your server here
const express = require('express')
const server = express();

const projectRouter = require('./project/router.js')

server.use(express.json());
server.use('/api/projects/', projectRouter);


server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Sam G's Add Data Persistence Sprint!</h1>
        <h2>Available endpoints:</h2>
        <ul>
            <li> add a new resource - [POST] /api/resources</li>
            <li>retrieve all resources - [GET] /api/resources</li>
            <li>add a new project - [POST] /api/projects</li>
            <li>retrieve all projects - [GET] /api/projects</li>
            <li>add a new task - [POST] /api/tasks</li>
            <li>retrieve all tasks - [GET] /api/tasks</li>
        </ul>
        <p>Thanks for visiting!</p>
    `)
})

module.exports = server;