import express from "express"
import config from "config"

require('dotenv').config()


const app = express()
const port = config.get('port')


app.listen(port, () => {
  console.log(`App ${port}`);
  
})