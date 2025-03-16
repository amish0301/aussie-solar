import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

const EmailModel = mongoose.models.Email || mongoose.model('Email', Schema);

export default EmailModel;