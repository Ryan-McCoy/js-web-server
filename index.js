const fs = require("node:fs")
const process = require("process")
const express = require('express')
const app = express()
const port = 3000
const cwd = process.cwd()

app.use((req, res, next) => {
    if (req.method !== "GET") {
        res.status(418).send("418 I'm A Teapot. The server is only capable of handelling GET requests.")
        return
    }
    let url = req.url
    console.log(`Request recieved at ${url}`)
    if (url.includes('..')) {
        res.status(403).send("403 Forbidden")
        return
    }
    fs.readFile(`${cwd}${url}`, 'utf-8', (err, data) => {
        if (err) {
            res.status(404).send('404 Not Found')
        }
        res.status(200).send(data)
    })
})

console.log(`CWD: ${[process.cwd()]}`)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))