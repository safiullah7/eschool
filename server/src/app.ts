import express from "express"
import config from "config"
import cors from "cors"
import log from './utils';
import dotenv from "dotenv";
import usersRouter from "./routes/users.routes"


dotenv.config()
const port = config.get<number>("port");
const app = express()

app.use(cors())
app.use(express.json());
app.use('/', usersRouter)


app.listen(port, async () => {
  log.info(`App ${port}`);
})