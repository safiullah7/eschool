import express, { Request, Response } from 'express';


const usersRouter = express.Router();


usersRouter.get("/health", (req: Request, res: Response) => res.sendStatus(200));

usersRouter.get('/', (req: Request, res: Response) => {
  res.json({message: 'Hello world'})
})


export default usersRouter