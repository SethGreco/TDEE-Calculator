import express, {Express, Request, Response} from 'express';
import {router} from './routes/tdee';
import cors from 'cors';

const port = process.env.PORT || 5000;
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(express.static(__dirname + '../dist'));

app.get('/', (req: Request, res: Response)=> {
  res.sendFile(__dirname + '/index.html');
});


app.listen(port);
console.log(`Application running on port ${port}`);