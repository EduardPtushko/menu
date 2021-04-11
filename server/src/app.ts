import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
config();

import { handleError } from './middlewares/handleError';
import { recipeRouter } from './routes/recipe';
import { imagesRouter } from './routes/images';

const app = express();

app.set('port', process.env.PORT);

app.use(json());
app.use(cors());

const morganFormat = process.env.NODE_ENV !== 'production' ? 'dev' : 'combined';

app.use(
    morgan(morganFormat, {
        skip: function (req, res): boolean {
            return res.statusCode < 400;
        },
        stream: process.stderr,
    })
);

app.use(
    morgan(morganFormat, {
        skip: function (req, res): boolean {
            return res.statusCode >= 400;
        },
        stream: process.stdout,
    })
);

app.use(recipeRouter);
app.use(imagesRouter);

app.all('*', (req, res) => {
    throw new Error();
});

app.use(handleError);

export { app };
