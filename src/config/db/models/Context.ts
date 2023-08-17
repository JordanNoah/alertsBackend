/**
 * esta tabla une todos los datos duplicados de moodle a la notificacion, 
 * para mantener el contexto de la misma, 
 * no poseen realmente ninguna logia es mas para debuggear 
 * y mantener el estado de la misma
 */

import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";
import { Activity, Course, Enrollment, Institution, Message, User } from "./index";

interface ContextAttributes {
    id: number,
    userId: number,
    courseId: number,
    activityId: number,
    enrollmentId: number,
    institutionId: number,
    messageId: number,
    created_at?: Date,
    updated_at?: Date
}

export interface ContextInput extends Optional<ContextAttributes, 'id'> {}
export interface ContextOutput extends Required<ContextInput> {}

class Context extends Model<ContextAttributes, ContextInput> implements ContextAttributes{
    public id!: number;
    public userId!: number;
    public courseId!: number;
    public activityId!: number;
    public enrollmentId!: number;
    public institutionId!: number;
    public messageId!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Context.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    courseId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    activityId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    enrollmentId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    institutionId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    messageId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
},{
    sequelize:sequelizeConnection,
    freezeTableName:true,
})



export default Context