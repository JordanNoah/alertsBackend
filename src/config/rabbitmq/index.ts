import rabbitmq from 'amqplib'
import { RabbitEventTypes } from './interfaces';
import { createUser, updateUser } from '../../processors/user.processor';
import { constants } from '../constants';
import { createCourse } from '../../processors/course.processor';
import { createEnrollment } from '../../processors/enrollment.processor';

type SetupRabbitMQ = {
    return: Promise<{
        channel: rabbitmq.ConfirmChannel;
        queue: string
    }>;
};

export async function setupRabbitMQ(): SetupRabbitMQ['return'] {
    try {
        const queueName = constants.RABBIT_QUEUE;

        const connection = await rabbitmq.connect({
            protocol: constants.RABBIT_PROTOCOL,
            hostname: constants.RABBIT_HOST,
            port: constants.RABBIT_PORT,
            username: constants.RABBIT_USERNAME,
            password: constants.RABBIT_PASSWORD,
            vhost: constants.RABBIT_VHOST
        })

        const channel = await connection.createConfirmChannel();

        await channel.assertQueue(queueName,{ exclusive:false })
        await channel.assertExchange(constants.RABBIT_EXCHANGE,constants.RABBIT_TYPE_EXCHANGE, { durable:true })
        await channel.bindQueue(queueName,constants.RABBIT_EXCHANGE,"")

        return { channel, queue:queueName }
    } catch (error) {
        throw error;
    }
}

export async function consume() {
    try {
        var i = 0;
        const {channel,queue} = await setupRabbitMQ()
        
        const eventProcessorsMap: Map<string, (payload: any) => Promise<void>> = new Map([
            [RabbitEventTypes.user_created, async (payload:any) => await createUser(payload)],
            [RabbitEventTypes.user_updated, async (payload:any) => await updateUser(payload)],
            [RabbitEventTypes.user_deleted, async (payload:any) => await deleteUser(payload)],
            [RabbitEventTypes.course_created, async (payload: any) => await createCourse(payload)],
            [RabbitEventTypes.enrollment_created, async (payload:any) => await createEnrollment(payload)]
        ])

        var recivedConsume = await channel.consume(queue, async (msg:any) => {
            if (msg !== null && msg?.content) {
                const content = msg.content.toString();        

                const eventProcessor = eventProcessorsMap.get(msg.properties.type);

                if (eventProcessor) {
                    await eventProcessor(JSON.parse(content))
                    //channel.ack(msg)
                }else{
                    console.error(`Event not found: ${msg.properties.type}`);
                }
            }

            i = i + 1;
            console.log("message: ",i);    
        })

        console.log("recived consumer: ",recivedConsume);
    } catch (error) {
        throw error;
    }
}