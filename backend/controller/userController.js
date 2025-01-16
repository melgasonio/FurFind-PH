const Users = require('../models/userModel');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password
    } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Users.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Error creating account. Try again later.'});
    }
};

const getUser = async (req, res) => {
    const { email, password } = req.body;

    try { 
        const user = await Users.findOne({ email: email });

        if(!user) {
            return res.status(404).json({error: 'User not found'})        
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Wrong password. Please try again.' });
        }

        res.status(200).json(user)    
    } catch (error) {
        res.status(500).json({ error: error.message || 'Error fetching user.' });
    }
};

const updateUser = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Users.findOneAndUpdate({ email }, { $set: req.body }, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Error updating user.' });
    }
};

const deleteUser = async (req, res) => {
    const { email } = req.body
    
    try {
        const user = await Users.findOneAndDelete({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Error deleting user.' });
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}