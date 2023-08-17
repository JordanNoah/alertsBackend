import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../sequelize";
import { Institution } from "./index";

interface UserAttributes {
    id: number,
    externalId: number,
    institutionId: number,
    userName: string,
    fullName: string,
    createdAt?: Date,
    updatedAt?: Date
}

export interface UserInput extends Optional<UserAttributes,'id'> {}
export interface UserOutput extends UserInput {}

class User extends Model<UserAttributes,UserInput> implements UserAttributes {
    declare id: number
    declare externalId: number
    declare institutionId: number
    declare userName: string;
    declare fullName: string;
    declare readonly createdAt?: Date
    declare readonly updatedAt?: Date
}

User.init({
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
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:sequelizeConnection,
    timestamps:true,
    freezeTableName: true
})

//User.belongsTo(Institution,{foreignKey:'institutionId'})

export default User