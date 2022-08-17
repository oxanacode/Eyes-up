const PORT = 3000;
const CONNECT = 'mongodb://127.0.0.1:27017/RSClone';
const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection;
const routerV1 = require('./routers/v1');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routerV1);

db.on('eror', (error) => {
  console.log(error);
});
db.on('open', () => {
  console.log('Connected to DB.');
});

const start = async () => {
  try {
    await mongoose.connect(CONNECT);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();