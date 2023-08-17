import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../sequelize'
import { Institution } from './index'

interface ActivityAttributes {
    id: number,
    externalId: number,
    institutionId: number,
    name: string,
    type: string,
    url: string,
    startDate: Date,
    endDate: Date,
    createdAt?: Date,
    updatedAt?: Date
}

export interface ActivityInput extends Optional<ActivityAttributes, 'id'> {}
export interface ActivityOutput extends ActivityInput {}

class Activity extends Model<ActivityAttributes, ActivityInput> implements ActivityAttributes{
    public id!: number
    public externalId!: number
    public institutionId!: number
    public name!: string
    public type!: string
    public url!: string
    public startDate!: Date
    public endDate!: Date
    
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

Activity.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    externalId:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    institutionId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    type:{
        type: DataTypes.STRING,
        allowNull:false
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    startDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    endDate:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    sequelize:sequelizeConnection,
    timestamps:true,
    freezeTableName: true
})

export default Activity