const fs = require("node:fs")
const process = require("process")
const express = require('express')
const app = express()
const port = 3000
const cwd = process.cwd()

app.use((req, res, next) => {
    let url = req.url
    console.log(`Request recieved at ${url}`)
    if (url.includes('..')) {
        res.status(400).send("Fuck you")
        return
    }
    fs.readFile(`${cwd}${url}`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('404')
        }
        res.status(200).send(data)
    })
})

console.log(`CWD: ${[process.cwd()]}`)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))