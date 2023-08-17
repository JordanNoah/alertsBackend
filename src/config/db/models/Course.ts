import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";

interface CourseAttributes {
    id: number,
    externalId: number,
    institutionId: number,
    name: string,
    shortName: string,
    idNumber: string,
    startDate: string,
    endDate: string,
    createdAt?: Date,
    updatedAt?:Date
}

export interface CourseInput extends Optional<CourseAttributes,'id'> {}
export interface CourseOutput extends CourseInput {}

class Course extends Model<CourseAttributes,CourseInput> implements CourseAttributes{
    declare id: number
    declare externalId: number
    declare institutionId: number
    declare name: string
    declare shortName: string
    declare idNumber: string
    declare startDate: string
    declare endDate: string
    
    declare readonly createdAt?: Date
    declare readonly updatedAt?:Date
}

Course.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    externalId:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    institutionId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    shortName:{
        type: DataTypes.STRING,
        allowNull: true
    },
    idNumber:{
        type: DataTypes.STRING,
        allowNull: true
    },
    startDate:{
        type: DataTypes.STRING,
        allowNull: true
    },
    endDate:{
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    sequelize:sequelizeConnection,
    timestamps:true,
    freezeTableName: true
})

export default Course