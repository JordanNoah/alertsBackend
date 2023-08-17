import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../sequelize'

interface InstitutionAttributes {
    id: number;
    uuid: string;
    name: string;
    fullname: string;
    abbreviation: string;
    domain: string;
    token: string;
    website: string;
    rest_path: string;
    modality: string;
    translations: Object;
    created_at?: Date;
    updated_at?: Date;
}

export interface InstitutionInput extends Optional<InstitutionAttributes,'id'> {}
export interface InstitutionOutput extends Required<InstitutionInput> {}

class Institution extends Model<InstitutionAttributes, InstitutionInput> implements InstitutionAttributes{
    declare id: number;
    declare uuid: string;
    declare name: string;
    declare fullname: string;
    declare abbreviation: string;
    declare domain: string;
    declare token: string;
    declare website: string;
    declare rest_path: string;
    declare modality: string;
    declare translations: Object;
    declare readonly created_at: Date;
    declare readonly updated_at: Date;
}

Institution.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid:{
        type:DataTypes.STRING,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull: false
    },
    abbreviation:{
        type:DataTypes.STRING,
        allowNull: false
    },
    domain:{
        type:DataTypes.STRING,
        allowNull: false
    },
    token:{
        type:DataTypes.STRING,
        allowNull: false
    },
    website:{
        type:DataTypes.STRING,
        allowNull: false
    },
    rest_path:{
        type:DataTypes.STRING,
        allowNull: false
    },
    modality:{
        type:DataTypes.STRING,
        allowNull: false
    },
    translations:{
        type:DataTypes.JSON,
        allowNull:false
    },
},{
    sequelize:sequelizeConnection,
    freezeTableName:true
})

export default Institution