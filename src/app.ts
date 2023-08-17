import dotenv from 'dotenv'
import { dbInit,seederInit } from "./config/db/init"
import { consume } from "./config/rabbitmq"


await dbInit()
await seederInit()
await consume()