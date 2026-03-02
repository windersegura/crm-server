import express, {Application, Express, Request, Response} from 'express';
import 'dotenv/config';
import {drizzle} from 'drizzle-orm/node-postgres';

const app: Application = express();
const port = process.env.PORT || 3500;

const db = drizzle({connection: process.env.DATABASE_URL!, casing: 'snake_case'});

app.get('/', (req:Request, res:Response) => {
    res.send('Welcome to Express and Typescript Server');
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})