/*
** Express Server
*/

const express = require('express');
const cors = require('cors');
const connectDB  = require('./config/db');

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());

// Defining Routes
app.use('/api/users', require('./api/routes/users'));
app.use('/api/auth', require('./api/routes/auth'));

// Connecting Mongoose
connectDB();

// Set port
const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`fun is @ ${port} 🌈`))