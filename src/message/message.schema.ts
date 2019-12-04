import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    name: String,
    text: String,
    created_at: { type: Date, default: Date.now },
});