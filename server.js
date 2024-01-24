const express = require('express')
const mongoose = require ('mongoose')
const port = 3000
const port2 = 3000

const app = express()
app.use(express.json())
console.log(port2)

mongoose.connect(url).then(() => {
    console.log('Connection to database successful');
}).then(() => {
    app.listen(port, () => {
        console.log(`Server is listening to port: ${port}`);
    })
})