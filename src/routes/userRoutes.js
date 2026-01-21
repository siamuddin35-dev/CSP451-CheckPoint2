// userRoutes.js - REST API structure and endpoints
// This module defines the routes for user-related API operations

const express = require('express');
const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Public
 */
router.get('/', (req, res) => {
    // Simulated database fetch
    const users = [
        { id: 1, name: 'Md Siam', role: 'Student' },
        { id: 2, name: 'Instructor', role: 'Admin' }
    ];
    
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

/**
 * @route   POST /api/users
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name, email, and password'
        });
    }

    // Simulated user creation
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: { name, email }
    });
});

/**
 * @route   GET /api/users/:id
 * @desc    Get single user by ID
 * @access  Private
 */
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    
    // Logic to find user by ID would go here
    res.status(200).json({
        success: true,
        message: `Fetched details for user ${userId}`
    });
});

module.exports = router;