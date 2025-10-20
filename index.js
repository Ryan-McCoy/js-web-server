const fs = require("node:fs")
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log(`Request recieved at ${req.url}`)
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))