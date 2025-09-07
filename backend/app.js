const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Routes
// Use user routes with /api prefix
app.use('/api', userRoutes);   

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
