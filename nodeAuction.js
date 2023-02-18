const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://pkhakhkhar07:Parth1604@cluster0.3xieekm.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  userId: String
});
const User = mongoose.model('User', userSchema);

// Handle POST request to save user data
app.post('/register', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const userId = req.body.userId;
  const user = new User({ name, phone, email, userId });
  user.save(err => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    } else {
      res.redirect('/home.html');
    }
  });
});

// Add a GET endpoint to retrieve all users
app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving users from database');
    } else {
      console.log(users);
      res.send(users);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


