import { Sequelize } from 'sequelize';

import { constants } from '../constants';

const sequelizeConnection = new Sequelize(
    constants.DB_TABLE,
    constants.DB_USERNAME,
    constants.DB_PASSWORD,
    {
        host:constants.DB_HOST,
        logging: false,
        dialect:'mysql'
    }
)

export default sequelizeConnection;