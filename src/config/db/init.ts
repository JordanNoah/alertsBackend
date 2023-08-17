import { CreateInstitutionDTO } from "../../dto/institution.dto";
import { Activity, User, Course, Enrollment, Institution, Message, Context, NotificationType, Notification } from "./models";
import sequelizeConnection from "./sequelize";

import institutions from '../db/seeders/Institution'

var force = true

export async function dbInit(){
    await sequelizeConnection.sync({force});
    //associaciones entre tablas
    Activity.belongsTo(Institution,{foreignKey:'institutionId'}),
    User.belongsTo(Institution,{foreignKey:'institutionId'}),
    Enrollment.belongsTo(Institution,{foreignKey:'institutionId'}),
    Course.belongsTo(Institution,{foreignKey:'institutionId'}),
    Message.belongsTo(Institution,{foreignKey:'institutionId'}),
    Notification.belongsTo(Institution,{foreignKey:'institutionId'}),
    Notification.belongsTo(Context,{foreignKey:'contextId'}),
    Notification.belongsTo(NotificationType,{foreignKey:'notificationTypeId'})
    Context.belongsTo(User,{foreignKey:'userId'})
    Context.belongsTo(Activity,{foreignKey:'activityId'}) 
    Context.belongsTo(Enrollment,{foreignKey:'enrollmentId'}) 
    Context.belongsTo(Course,{foreignKey:'courseId'})
    Context.belongsTo(Institution,{foreignKey:'institutionId'})
    Context.belongsTo(Message,{foreignKey:'messageId'})
}

export async function seederInit(){
    institutions.forEach(async (element: CreateInstitutionDTO) => {
        var checkInstitution = await Institution.build(element)
        var wascreated = await checkInstitution.save();
    });
    
}
