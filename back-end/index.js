const PORT = 3000;
const CONNECT = 'mongodb://127.0.0.1:27017';
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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