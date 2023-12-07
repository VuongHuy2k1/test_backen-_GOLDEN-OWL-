const express = require('express')
const productRouter = require('./server/routes/index')
const cors = require('cors')
const db = require('./server/config/db')
db.connect()
const app = express()
app.use(cors())
const PORT = process.env.PORT || 4000
app.use('/api/v1/products', productRouter)
app.listen(PORT, () => {
  console.log(`Server is listening on port`)
})
