const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
require('dotenv').config()
const port =process.env.PORT ||8000
const { readdirSync } = require('fs')
app.get('/', (req, res) => {
  res.send('main pagee')

})
readdirSync("./routes").map((file)=>app.use("/",require(`./routes/${file}`)))



app.listen(port, () => {
  console.log(`server is running on port : ${port}`)
})