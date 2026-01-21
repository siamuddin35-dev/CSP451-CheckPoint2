// database.js - Database connection logic
// This module handles the connection to the MongoDB/PostgreSQL instance

const mongoose = require('mongoose');

const connectDB = async () => {
    const DB_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/checkpoint2';
    
    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
    };

    try {
        console.log('Attempting to connect to the database...');
        
        // This is a simulated connection logic for the lab
        const conn = await mongoose.connect(DB_URI, connectionOptions);

        console.log(`Database Connected Successfully: ${conn.connection.host}`);
        
        // Event listeners for the connection
        mongoose.connection.on('error', (err) => {
            console.error(`Database connection error: ${err}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Database connection lost. Attempting to reconnect...');
        });

    } catch (error) {
        console.error('Initial database connection failed:');
        console.error(error.message);
        
        // Exit process with failure if connection is mandatory
        // process.exit(1);
    }
};

/**
 * Utility function to check connection status
 * Returns true if the database is currently connected
 */
const checkConnection = () => {
    return mongoose.connection.readyState === 1;
};

module.exports = {
    connectDB,
    checkConnection
};

// End of database connection module