const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();
const uri = process.env.MONGODBURI || 'mongodb://localhost:27017/mern-auth-app';
mongoose.connect(uri,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) return console.log(`DB::Error in connection to DB`);
    return console.log(`DB::connected successfully to DB`);
  });
const app = express();
const port = process.env.PORT || 8000;
// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controllers
const signupController = require('./controllers/signup');
const loginController = require('./controllers/login');
const usersController = require('./controllers/users');
// Routes
app.use('/signup', signupController);
app.use('/login', loginController);
app.use('/users', usersController);

app.use((req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Welcome to the MERNstack auth app'
  });
});


app.listen(port, () => console.log(`SERVER::running on ${port}`));