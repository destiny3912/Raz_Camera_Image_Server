import { RabbitRPC } from "@golevelup/nestjs-rabbitmq"

export class MessagingService {
    
    // @RabbitRPC({
    //     exchange: 'image',
    //     routingKey: 'image-key',
    //     queue: 'image-queue',
    //     queueOptions: {
    //         channel: 'channel-1',
    //     }
    // })
    // public async publishHandler(msg: {}) {
    //     console.log(JSON.stringify(msg));
    // }
}