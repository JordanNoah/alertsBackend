import dotenv from "dotenv"

dotenv.config()

export const constants = {
    DB_TABLE: process.env.DB_TABLE || '',
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_HOST: process.env.DB_HOST || '',

    RABBIT_PROTOCOL: process.env.RABBIT_PROTOCOL || '',
    RABBIT_HOST: process.env.RABBIT_HOST || '',
    RABBIT_PORT: Number(process.env.RABBIT_PORT) || 5555,
    RABBIT_USERNAME: process.env.RABBIT_USERNAME || '',
    RABBIT_PASSWORD: process.env.RABBIT_PASSWORD || '',
    RABBIT_VHOST: process.env.RABBIT_VHOST || '',
    RABBIT_QUEUE: process.env.RABBIT_QUEUE || '',
    RABBIT_EXCHANGE: process.env.RABBIT_EXCHANGE || '',
    RABBIT_TYPE_EXCHANGE: process.env.RABBIT_TYPE_EXCHANGE || '',
    RABBIT_ROUTING_KEY: process.env.RABBIT_ROUTING_KEY || ''
}