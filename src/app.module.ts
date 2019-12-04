import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://rodrigobastosv:xsLIo0gwLjdbaGzW@cluster0-ajy3s.mongodb.net/test?retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true
      }),
      MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
