import express from 'express';
import middlewaresConfig from './config/middlewares';
import './config/db';
import { port } from './constants';

const app = express();

middlewaresConfig(app);

// register modules API routes here

app.listen(port, err => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});
