import express from "express";
import 'express-async-errors';
import { json } from "body-parser"
import { authRoutes } from './routes/authRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

// Middlewere Routes
app.use('/api', authRoutes);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler)

app.listen(3000, () => {
  console.log('listening on port 3000..');
});