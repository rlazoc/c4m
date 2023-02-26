require('dotenv').config({ path: '.env.local' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.log(error);
  }
}

connect();

const userSchema = new mongoose.Schema ({
    username: String,
    password: String
  });

const User = mongoose.model('User', userSchema);

const user = new User ({
  username: 'a',
  password: '12345'
});

user.save((error) => {
  if (error) throw error;
  console.log('User has been saved to the database.');
});

app.get('/', (req, res) => {
  res.send('Connected!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
