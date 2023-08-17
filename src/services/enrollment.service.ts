import { enrollmentResult } from "../processors/interfaces/enrollment.interface";
import { Enrollment  } from '../config/db/models'

const createEnrollmentService = async (enrollment:enrollmentResult,
    insititutionId:number,
    courseId:number) => {
    return await Enrollment.findOrCreate({
        defaults:{
            externalId:enrollment.externalId,
            institutionId:insititutionId,
            userId:enrollment.userId,
            courseId:courseId,
            endDate:enrollment.endDate,
            startDate:enrollment.startDate
        },
        where:{
            externalId:enrollment.externalId,
            institutionId:insititutionId
        }
    })
}

export {
    createEnrollmentService
}