import express, {Application, Express, Request, Response} from 'express';

const app: Application = express();
const port = process.env.PORT || 3500;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})