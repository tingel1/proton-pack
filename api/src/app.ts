import express, { type Request, type Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world! This is my TypeScript Node.js API');
});

const port = process?.env?.PORT || 3010;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
