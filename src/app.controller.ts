import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AmqpConnection, RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor( 
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection
    ){}
    
    @Get()
    async rmqTest() {
      setInterval(() => {
        this.amqpConnection.publish<CustomModel>('image', 'image-key', {foo: 'test', bar: 'test'});
      }, 500);
      
    }
}

interface CustomModel {
  foo: string;
  bar: string;
}
