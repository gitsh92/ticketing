import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.use((req, res, next) => {
  console.log('received request');
  next();
});

app.get('/api/users/currentuser', (req, res) => {
  res.send('hi');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
