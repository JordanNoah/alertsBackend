import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";

interface NotificationTypeAttributes {
    id: number,
    name: string,
    langKey: string,
    isPermanent: string,
    description: string,
    icon: string,
    createdAt?: Date,
    updatedAt?:Date
}

export interface NotificationTypeInput extends Optional<NotificationTypeAttributes, 'id'> {}
export interface NotificationTypeOutput extends NotificationTypeInput {}

class NotificationType extends Model<NotificationTypeAttributes,NotificationTypeInput> implements NotificationTypeAttributes{
    public id!: number
    public name!: string
    public langKey!: string
    public isPermanent!: string
    public description!: string
    public icon!: string
    public readonly createdAt?: Date
    public readonly updatedAt?: Date
}

NotificationType.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    langKey:{
        type:DataTypes.STRING,
        allowNull:true
    },
    isPermanent:{
        type:DataTypes.BOOLEAN,
        allowNull:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    icon:{
        type:DataTypes.STRING,
        allowNull:true
    },
},{
    sequelize:sequelizeConnection,
    timestamps:true,
    freezeTableName:true
})

export default NotificationType