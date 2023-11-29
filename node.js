const express = require('express')
const path = require('path')
const app = express()

app.get("/", (req, res) => { 
res.sendFile(path.join(__dirname, '/index.html'))
})

app.get("/high_low", (req, res) => { 
    res.send("")
})

app.get("/hngmn", (req, res) => { 
    res.send("")
})

app.get("/rps", (req, res) => { 
    res.send("")
})

//This goes at the bottom! 
app.listen(3000)
console.log("Express is running!")

//http://localhost:5230/ 
