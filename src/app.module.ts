import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { MessagingService } from './messaging.service';
@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'image',
          type: 'topic'
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
      channels: {
        'channel-1': {
          prefetchCount: 15,
          default: true,
        }
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MessagingService],
})
export class AppModule {}
