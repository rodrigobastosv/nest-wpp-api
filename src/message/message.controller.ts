import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {MessageService} from "./message.service";
import {Message} from "./message.interface";

@Controller('message')
export class MessageController {

    constructor(private readonly userService: MessageService) {}

    @Get()
    async findAll(): Promise<Message[]> {
        return await this.userService.findAll();
    }

    @Post()
    async save(@Body() message: Message): Promise<Message> {
        return await this.userService.save(message);
    }

    @Delete(':id')
    async delete(@Param() params): Promise<void> {
        await this.userService.delete(params.id);
    }
}