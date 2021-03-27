import mongoose from 'mongoose';

const mongoose = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    active: {
        type: boolean,
        required: true,
    },
});

export default mongoose.model('User', Schema);