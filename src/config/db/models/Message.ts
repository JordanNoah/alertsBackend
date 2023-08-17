import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";

interface MessageAttributtes {
    id:number;
    externalId:number;
    institutionId: number,
    userIdFrom:number;
    fullmessage:number;
    created_at?: Date;
    updated_at?: Date;
}

export interface MessageInput extends Optional<MessageAttributtes, 'id'> {}
export interface MessageOutput extends Required<MessageInput> {}

class Message extends Model<MessageAttributtes, MessageInput> implements MessageAttributtes{
    public id!: number;
    public externalId!: number;
    public institutionId!: number;
    public userIdFrom!: number;
    public fullmessage!: number;
    public readonly created_at?: Date;
    public readonly updated_at?: Date;
}

Message.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    externalId:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    institutionId:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    userIdFrom:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    fullmessage:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize:sequelizeConnection,
    freezeTableName:true
})

export default Message