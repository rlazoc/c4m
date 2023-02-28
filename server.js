require('dotenv').config({ path: '.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

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
  username: 'b',
  password: '12345'
});

user.save((error) => {
  if (error) throw error;
  console.log('User saved to the database (strict)');
});

app.get('/', (req, res) => {
  res.send('Connected!');
});

app.post('/', (req, res) => {
  const {username, password} = req.body;
  const user = new User({
    username,
    password
  });
  user.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send('User saved to the database (api)');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
