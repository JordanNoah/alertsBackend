import { Course } from "../config/db/models";
import { courseResult } from "../processors/interfaces/course.interface";

const createCourseService = async (course:courseResult,insititutionId:number) => {
    return await Course.findOrCreate({
        defaults:{
            name:course.name,
            shortName:course.shortName,
            externalId:course.externalId,
            endDate:course.endDate,
            idNumber:course.idNumber,
            institutionId:insititutionId,
            startDate:course.startDate
        },
        where:{
            externalId:course.externalId,
            institutionId:insititutionId
        }
    })
}

const existCourseService = async (courseExternalId:number,insititutionId: number) => {
    return await Course.findOne({where:{
        externalId:courseExternalId,
        institutionId:insititutionId
    }})
}

const deleteCourseService = async (courseId:number) => {
    const course = await Course.findOne({
        where:{
            externalId:courseId
        }
    });
    
    if (course) {
        await course.destroy()
    }
    
    return course;
}

export{
    createCourseService,
    existCourseService,
    deleteCourseService
}