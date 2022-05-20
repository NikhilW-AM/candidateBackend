const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
// var bodyp = require('body-parser')

const authRoute = require('./routes/auth')

// app.use(bodyp.json())
app.use(express.json())
app.use(cors())
app.use('/api', authRoute)

// app.get("/a", (req, res) => {
//     res.send("HELLO")
// })

mongoose.connect('mongodb+srv://NikhilLW:nikhil123@test.dte6z.mongodb.net/candidate?retryWrites=true&w=majority',()=>console.log('Connected to DB!'))

app.listen(8080,()=>console.log('Server is running at 8080'))