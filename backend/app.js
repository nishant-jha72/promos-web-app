const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
require('./routes/user.routes');
const ApiError = require('./utils/ApiError.util');
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
// Middleware
app.use(helmet()); // Security headers // Enable CORS
app.use(cookieParser()); // Parse cookies
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan('dev')); // Logging
const UserRoutes = require('./routes/user.routes');
// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});



app.use('/api/users', UserRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || []
  });
});
module.exports = app;