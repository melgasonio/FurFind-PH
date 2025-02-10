const Users = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Helper function to generate JWT 
const generateToken = (userId) => {
    return jwt.sign({ userId, role: "user" }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

// Helper function to set authentication cookie
const setAuthCookie = (res, token) => {
    res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 3600000, // 1 hour       
    })
}

// Create User (Signup)
const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Users.create({ firstName, lastName, email, password: hashedPassword });

        // Generate token and set cookie
        const token = generateToken(user._id);
        setAuthCookie(res, token);

        res.status(201).json({ message: "Signup successful", userId: user._id });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({ error: "Email already in use. Please log in." });
        }
        res.status(500).json({ error: error.message || "Error creating account. Try again later." });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Compare hashed password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate token and set cookie
        const token = generateToken(user._id);
        setAuthCookie(res, token);

        res.status(200).json({ message: "Login successful", userId: user._id });
    } catch (error) {
        res.status(500).json({ error: error.message || "Error logging in. Please try again." });
    }
};

// Logout User
const logoutUser = async (req, res) => {
    res.clearCookie("authToken", { httpOnly: true, sameSite: "Strict", secure: process.env.NODE_ENV === "production" });
    res.json({ message: "Logged out" });
};

// Update User
const updateUser = async (req, res) => {
    const { email, ...updateFields } = req.body;

    try {
        const user = await Users.findOneAndUpdate({ email }, { $set: updateFields }, { new: true });
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message || "Error updating user." });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Users.findOneAndDelete({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Error deleting user." });
    }
};

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
};
