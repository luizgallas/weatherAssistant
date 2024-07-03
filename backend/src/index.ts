import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './controllers/router';

const app = express();
const port = 8000;

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});