const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(cors())

//routes 
const postRoutes = require('./routes/post')

app.use('/api/posts', postRoutes)

//DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
  })
  .catch((error) => {
    console.log(error)
  })

app.get('/', (req, res) => {
  res.json({ mssg: "hello world" })
})