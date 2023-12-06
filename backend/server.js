const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 8000; // Choose the port you want to run your server on

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace 'mydatabase' with your actual database name)
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  message: String,
});

// Create a Mongoose model based on the schema
const UserModel = mongoose.model('User', userSchema);

// Endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { name, password, email, message } = req.body;
    const newUser = new UserModel({ name, password, email, message });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);

    // Send the saved user back as the response
    res.json(savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
