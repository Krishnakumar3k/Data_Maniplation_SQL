const mysql2 = require('mysql2');
require('dotenv').config(); // Load .env variables

// Create MySQL connection using environment variables
const connection = mysql2.createConnection({
    host: process.env.DB_HOST,      // Host from .env
    user: process.env.DB_USER,      // User from .env
    password: process.env.DB_PASSWORD, // Password from .env
    database: process.env.DB_NAME,  // Database name from .env
    port: process.env.DB_PORT       // Port from .env
});

// Test the connection
connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = connection;
