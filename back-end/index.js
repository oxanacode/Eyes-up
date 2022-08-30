const PORT = process.env.PORT;
const CONNECT = process.env.MONGO_CONNECTION_STRING;
const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection;
const routerV1 = require('./routers/v1');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routerV1);

db.on('error', (error) => {
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