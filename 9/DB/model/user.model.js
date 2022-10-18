import { Schema, model } from "mongoose";

const userSchema = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    ConfirmEmail: { type: Boolean, default: false },
    phone: { type: String },
    Age: { type: Number },
    Phone: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    isOnline: { type: Boolean, default: false },
    lastSeen: {
        type: String,
        default: null,
    },
    code: {
        type: String,
        default: null
    }



}, {
    timestamps: true
})

export const userModel = model('User', userSchema)