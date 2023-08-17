import { DataType, DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";
import { Context, NotificationType } from ".";

interface NotificationAttributes {
    id: number,
    contextId: number,
    institutionId: number,
    title: string,
    detail: string,
    url: string,
    isViewed: boolean,
    upSince: Date,
    notificationTypeId: number,
    createdAt?: Date,
    updatedAt?:Date
}

export interface NotificationInput extends Optional<NotificationAttributes, 'id'> {}
export interface NotificationOutput extends NotificationInput{}

class Notification extends Model<NotificationAttributes,NotificationInput> implements NotificationAttributes{
    public id!: number
    public contextId!: number
    public institutionId!: number
    public title!: string
    public detail!: string
    public url!: string
    public isViewed!: boolean
    public upSince!: Date
    public notificationTypeId!: number
    public readonly createdAt?: Date
    public readonly updatedAt?:Date
}

Notification.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    contextId:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    institutionId: {
        type:DataTypes.INTEGER,
        allowNull:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    detail:{
        type:DataTypes.STRING,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isViewed:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    upSince:{
        type:DataTypes.DATE,
        allowNull:false
    },
    notificationTypeId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize:sequelizeConnection,
    freezeTableName:true,
    timestamps:true
})

export default Notification