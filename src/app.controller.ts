import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AmqpConnection, RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { ImageDto } from './image.dto';

@Controller()
export class AppController {
  constructor( 
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection
    ){}
    
    private readonly filePath:string = './test.png';

    @Get()
    async rmqTest() {
      const fs = require('fs');

      let imageFile = fs.readFileSync(this.filePath);
      let encode = Buffer.from(imageFile).toString('base64');

      this.amqpConnection.publish<ImageDto>('image', 'image-key', {image: encode});
    }
}

