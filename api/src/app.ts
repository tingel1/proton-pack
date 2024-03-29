import express, { Request, Response } from 'express';

const app = express();
const port = 3010;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world! This is my TypeScript Node.js API');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});