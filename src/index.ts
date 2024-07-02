import express, { Router } from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';

import router from './controllers/router';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});