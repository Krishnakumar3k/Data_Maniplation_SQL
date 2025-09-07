const express = require('express');
const userRoutes = require('./Routes/userRoutes');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// localhost:8080/api/create
app.use('/api', userRoutes);   

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
