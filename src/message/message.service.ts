import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Message } from "./message.interface";

@Injectable()
export class MessageService {
    constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) {}

    async findAll(): Promise<Message[]> {
        return await this.messageModel.find().exec();
    }

    async save(message: Message): Promise<Message> {
        return await this.messageModel.create(message);
    }

    async delete(id: string): Promise<void> {
        await this.messageModel.deleteOne({
            _id: id
        });
    }
}