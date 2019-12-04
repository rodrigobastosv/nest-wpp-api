import { Document } from 'mongoose';

export interface Message extends Document {
    readonly name: string;
    readonly message: string;
    readonly created_at: Date;
}