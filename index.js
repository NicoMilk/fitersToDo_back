import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import tasksRoutes from './routes/tasks.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use('/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send('Bonjour monde !');
});

app.listen(port, () => console.log(`Server OK on http://localhost:${port}`));
