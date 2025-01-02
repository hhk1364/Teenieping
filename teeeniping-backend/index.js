const express = require('express')
const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log(`app Port${port}`)
})

app.get('/', (req, res) => {
    res.send('hell world!')
})