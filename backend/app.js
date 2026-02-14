const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
require('./routes/user.routes');
const ApiError = require('./utils/ApiError.util');
const app = express();
const allowedOrigins = [
  'https://promos-v1.netlify.app', // Your Netlify URL
  'http://localhost:5173',        // Your Local Development URL
  'http://localhost:8000',
  'http://localhost:3000'
];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // Required if you are sending cookies or tokens
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

// app.get("/api/v1/users/verify-email", (req, res) => {
//     res.send("If you see this, the route is finally working! Token received: " + req.query.token);
// });

// app.use('/api/users', UserRoutes);
// Change this line in app.js:
app.use('/api/v1/users', UserRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || []
  });
});
module.exports = app;