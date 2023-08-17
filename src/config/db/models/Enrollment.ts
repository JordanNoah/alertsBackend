import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";

interface EnrollmentAttributes {
    id: number,
    externalId: number,
    institutionId: number,
    userId: number,
    courseId: number,
    startDate: string,
    endDate: string,
    createdAt?: Date,
    updatedAt?:Date
}

export interface EnrollmentInput extends Optional<EnrollmentAttributes, 'id'> {}
export interface EnrollmentOutput extends EnrollmentInput {}

class Enrollment extends Model<EnrollmentAttributes,EnrollmentInput> implements EnrollmentAttributes {
    declare id: number
    declare externalId: number
    declare institutionId: number
    declare userId: number;
    declare courseId: number;
    declare startDate: string
    declare endDate: string

    declare readonly createdAt?: Date
    declare readonly updatedAt?:Date
}

Enrollment.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    externalId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    institutionId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    courseId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    startDate:{
        type:DataTypes.STRING,
        allowNull:false
    },
    endDate:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:sequelizeConnection,
    timestamps:true,
    freezeTableName: true
})

export default Enrollment